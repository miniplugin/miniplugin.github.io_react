import React, {Component} from 'react';
import {compose} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
/* import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'; 구글API키가 있어야 react geocode get lat from places 사용가능.
*/

/**
     * 두 날짜의 차이를 일자로 구한다.(조회 종료일 - 조회 시작일)
     *
     * @param val1 - 조회 시작일(날짜 ex.2020-01-02)
     * @param val2 - 조회 종료일(날짜 ex.2020-01-01)
     * @return 기간에 해당하는 일자 위 결과는 1일
     */
function calDateRange (val1, val2) {
  var FORMAT = '-';
  // FORMAT을 포함한 길이 체크
  if (val1.length > 10 || val2.length > 10) return null;
  // FORMAT이 있는지 체크
  if (val1.indexOf (FORMAT) < 0 || val2.indexOf (FORMAT) < 0) return null;
  // 년도, 월, 일로 분리
  var start_dt = val1.split (FORMAT);
  var end_dt = val2.split (FORMAT);
  // 월 - 1(자바스크립트는 월이 0부터 시작하기 때문에...)
  // Number()를 이용하여 08, 09월을 10진수로 인식하게 함.
  start_dt[1] = Number (start_dt[1]) - 1 + '';
  end_dt[1] = Number (end_dt[1]) - 1 + '';

  var from_dt = new Date (start_dt[0], start_dt[1], start_dt[2]);
  var to_dt = new Date (end_dt[0], end_dt[1], end_dt[2]);
  return (to_dt.getTime () - from_dt.getTime ()) / 1000 / 60 / 60 / 24;
}

const MapWithAMarker = compose (withScriptjs, withGoogleMap) (props => {
  //console.log ('props.markers', props.markers.map);
  //console.log ('props.markers.length----------', props.markers.length);
  var lat, lng, latlng = null;
  if (props.markers.length === 0) {
    lat = 36.818434; //초기엔 사용자 위치정보를 필요로 하지 않는다.
    lng = 127.1527916; //그래서 초기값을 더미로 주었습니다.
  } else if (props.mapReflng === null) {
    latlng = '36.818434, 127.1527916'; //props.markers[0].latlng;
    var arraylatlng = latlng.split (',');
    lat = arraylatlng[0];
    lng = arraylatlng[1];
  } else {
    //console.log ('props.mapReflng----------', props.mapReflng);
    lat = props.mapReflat;
    lng = props.mapReflng;
  }
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{lat: Number (lat), lng: Number (lng)}}
      center={{
        lat: Number (lat),
        lng: Number (lng),
      }}
      ref={props.onMapLoad}
      onDragEnd={props.onDragEnd}
    >
      {props.markers.map (marker => {
        const onClick = props.onClick.bind (this, marker);
        var icons = '/design_publish/img/gray-dot.png';
        let today = new Date ();
        let year = today.getFullYear (); // 년도
        let month = today.getMonth () + 1; // 월
        let date = today.getDate (); // 날짜
        //let day = today.getDay (); // 요일
        var nows = year + '-' + month + '-' + date;
        var resultday = calDateRange (
          year + '-' + marker.month + '-' + marker.day,
          nows
        );
        var latlng2 = marker.latlng;
        var arraylatlng2 = latlng2.split (',');
        var lat2 = arraylatlng2[0];
        var lng2 = arraylatlng2[1];
        /* console.log (
          'marker.latlng----------- : ' + resultday,
          marker.name,
          marker.address
        ); */
        if (resultday < 1) {
          //'0~1일이하';
          icons = '/design_publish/img/red-dot.png';
        } else if (resultday < 4) {
          //'1~3일이하';
          icons = '/design_publish/img/yellow-dot.png';
        } else if (resultday < 9) {
          //'4~9일이하';
          icons = '/design_publish/img/green-dot.png';
        }
        //Math.floor (Math.random () * 50000 + 1)
        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{lat: Number (lat2), lng: Number (lng2)}}
            options={{icon: icons}}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  {'확진자: ' + marker.name}<br />
                  {'방문처: ' + marker.address}<br />
                  {'확진일: ' + marker.month + '월' + marker.day + '일'}
                </div>
              </InfoWindow>}
            }
          </Marker>
        );
      })}
    </GoogleMap>
  );
});

export default class ShelterMap extends Component {
  constructor (props) {
    super (props);
    this.state = {
      shelters: [],
      selectedMarker: false,
      mapFetchUrl: this.props.fetchUrldata,
      mapSearchWord: this.props.searchWord,
      mapRef: null,
      mapReflat: null,
      mapReflng: null,
    };
  }
  handleMapDrag = this.handleMapDrag.bind (this);
  handleMapLoad = this.handleMapLoad.bind (this);
  componentDidUpdate (newProps, newState) {
    //console.log ('this.state.mapSearchWord === ', this.state.mapSearchWord);
    //console.log ('this.props.searchWord === ', this.props.searchWord);
    if (this.state.mapSearchWord === this.props.searchWord) {
      console.log ('render()안에서 this는 Map.js콤포넌트 모듈 자신을 가리킨다.', this);
      return false;
    } else {
      //alert ('this.state.mapSearchWord);
      //alert ('Map: ' + this.props.searchWord);
      this.setState ({mapSearchWord: this.props.searchWord});
      /* 구글 API키가 있어야만 사용가능.  그래서 건너띔
      //https://dev.to/wellyshen/introducing-use-places-autocomplete-react-hook-for-google-maps-places-autocomplete-41h5
      getGeocode ({address: this.props.searchWord})
        .then (results => getLatLng (results[0]))
        .then (({lat, lng}) => {
          console.log ('📍 Coordinates: ', {lat, lng});
        })
        .catch (error => {
          console.log ('😱 Error: ', error);
        });
        */
      this.componentDidMount ();
      console.log ('componentDidUpdate');
    }
  }
  componentDidMount () {
    fetch (this.props.fetchUrldata)
      .then (response => response.text ())
      //.then (mapdata => console.log ('JSONP--------------: ', mapdata))
      .then (responseText => {
        //var position = JSON.stringify (responseText);
        var regExp = new RegExp ('//.*\n', 'gm');
        var regExp2 = new RegExp ('address_english:\n', 'gm');
        var regExp3 = new RegExp ('address_english.*\n', 'gm');
        var regExp5 = new RegExp ('address_name.*\n', 'gm');
        var regExp13 = new RegExp ('address:\n', 'gm');
        var mapdata = responseText.replace (/var position = /g, '').trim ();
        mapdata = mapdata.replace (regExp, '').trim ();
        mapdata = mapdata.replace (regExp2, 'address_english:').trim ();
        mapdata = mapdata.replace (regExp13, 'address:').trim ();
        mapdata = mapdata.replace (/;/g, '').trim ();
        mapdata = mapdata.replace (regExp3, '').trim ();
        mapdata = mapdata.replace (regExp5, '').trim ();
        //mapdata = mapdata.replace (/\[/g, '{"position": [').trim ();
        //mapdata = mapdata.replace (/\]/g, ']}').trim ();
        mapdata = mapdata
          .replace (/\r/gi, '')
          .replace (/\n/gi, '')
          .replace (/\t/gi, '')
          .replace (/\f/gi, '');
        mapdata = mapdata.replace (/solo/g, '"solo"').trim ();
        mapdata = mapdata.replace (/profile/g, '"profile"').trim ();
        mapdata = mapdata.replace (/tag/g, '"tag"').trim ();
        mapdata = mapdata.replace (/month/g, '"month"').trim ();
        mapdata = mapdata.replace (/day/g, '"day"').trim ();
        mapdata = mapdata.replace (/name/g, '"name"').trim ();
        mapdata = mapdata.replace (/full/g, '"full"').trim ();
        mapdata = mapdata.replace (/address/g, '"address"').trim ();
        mapdata = mapdata.replace (/latlng/g, '"latlng"').trim ();
        //console.log ('mapdata--------------: ', mapdata);
        var jsondata = JSON.parse (mapdata);
        //console.log ('jsondata----------: ', jsondata);
        var results = [];
        let today = new Date ();
        let year = today.getFullYear (); // 년도
        let month = today.getMonth () + 1; // 월
        let date = today.getDate (); // 날짜
        //let day = today.getDay (); // 요일
        var nows = year + '-' + month + '-' + date;
        for (var i = 0; i < jsondata.length; i++) {
          var calDay = calDateRange (
            year + '-' + jsondata[i]['month'] + '-' + jsondata[i]['day'],
            nows
          );
          //console.log ('calDay-----------------: ', calDay);
          //jsondata[i]['month']+jsondata[i]['day']
          if (calDay < 9) {
            jsondata[i]['id'] = i;
            results.push (jsondata[i]);
          }
        }
        /* jsondata = jsondata.filter (l => {
          return l.name.toLowerCase ().match ('천안');
        }); */
        if (results.length === 0) {
          alert ('검색된 결과가 없습니다.');
          return false;
        } else {
          this.setState ({shelters: results});
          //this.setState ({mapReflat: null});
          //this.setState ({mapReflng: null});
          //검색에 해당하는 lat/lng 값 추출
          //console.log ('returnObject.length----------: ', results);
          for (var i2 = 0; i2 < results.length; i2++) {
            var str = this.props.searchWord;
            var n = str.includes (results[i2]['name']);
            //console.log ('this.state.mapReflat === ', n);
            if (n === true) {
              var latlng3 = results[i2]['latlng'];
              var arraylatlng3 = latlng3.split (',');
              var lat3 = arraylatlng3[0];
              var lng3 = arraylatlng3[1];
              this.setState ({mapReflat: lat3});
              this.setState ({mapReflng: lng3});
              break;
            }
          }
          if (n === false) {
            alert ('검색된 결과가 없습니다. 정확한 도시명을 입력해 주세요!');
          }
          //console.log ('this.state.mapReflat === ', this.state.mapReflat);
          //console.log ('this.state.mapReflng === ', this.state.mapReflng);
        }
      })
      .catch (e => {
        console.log ('fetch Error', e);
      });
    /* fetch (this.props.fetchUrldata).then (r => r.json ()).then (mapdata => {
      console.log ('mapdata--------------------: ', mapdata);
      if (mapdata.count === 0) {
        return false;
      } else {
        this.setState ({shelters: mapdata.position});
        this.setState ({mapReflat: null});
        this.setState ({mapReflng: null});
      }
    }); */
  }
  handleClick = (marker, event) => {
    this.setState ({selectedMarker: marker});
  };
  handleMapLoad (map) {
    this._mapComponent = map;
    //this.setState ({mapRef: this._mapComponent});
    //console.log ('getBounds', map.getBounds ());
  }
  handleMapDrag () {
    let mapRef = this._mapComponent;
    var lat = mapRef.getCenter ().lat ();
    var lng = mapRef.getCenter ().lng ();
    console.log ('mapRef:-------------', this.state.mapRef);
    console.log (
      mapRef.getCenter ().lat () + '; ' + mapRef.getCenter ().lng ()
    );
    this.setState ({mapReflat: lat});
    this.setState ({mapReflng: lng});
  }
  render () {
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.state.shelters}
        mapReflat={this.state.mapReflat}
        mapReflng={this.state.mapReflng}
        onClick={this.handleClick}
        onDragEnd={this.handleMapDrag}
        onMapLoad={this.handleMapLoad}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" //key=YOUR_API_KEY&
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={
          <div className="secondMap" style={{height: '100vh'}} />
        }
        mapElement={<div style={{height: '100%'}} />}
      />
    );
  }
}
