import React, {Component} from 'react';
import {compose} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
/* 현재 PC위치 찾기 */
/* const getLocation = () => {
  const pos = {};
  const geolocation = navigator.geolocation;
  if (geolocation) {
    geolocation.getCurrentPosition (findLocal, showEror);
  }
  function findLocal (position) {
    pos.lat = position.coords.latitude;
    pos.lng = position.coords.longitude;
  }
  function showEror () {
    console.log (Error);
  }
  return pos;
};
const myLocation = getLocation (); */
// object has lat and lng 현재는 사용자 위치정보를 필요로 하지 않는다.
const MapWithAMarker = compose (withScriptjs, withGoogleMap) (props => {
  //console.log ('props.markers', props.markers);
  //console.log ('props.markers.length----------', props.markers.length);
  var lat, lng = null;
  if (props.markers.length === 0) {
    lat = 36.818434; //myLocation.lat;//현재는 사용자 위치정보를 필요로 하지 않는다.
    lng = 127.1527916; //myLocation.lng;//그래서 초기값을 더미로 주었습니다.
  } else if (props.mapReflng === null) {
    lat = props.markers[0].lat;
    lng = props.markers[0].lng;
  } else {
    //console.log ('props.mapReflng----------', props.mapReflng);
    lat = props.mapReflat;
    lng = props.mapReflng;
  }
  return (
    <GoogleMap
      defaultZoom={16.3}
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
        var icons_text = '정보없음';
        var icons = '/design_publish/img/gray-dot.png';
        switch (marker.remain_stat) {
          case 'plenty':
            icons_text = '100개이상';
            icons = '/design_publish/img/green-dot.png';
            break;
          case 'some':
            icons_text = '30개 이상 100개미만';
            icons = '/design_publish/img/yellow-dot.png';
            break;
          case 'few':
            icons_text = '2개 이상 30개 미만';
            icons = '/design_publish/img/red-dot.png';
            break;
          case 'empty':
            icons_text = '1개 이하';
            icons = '/design_publish/img/gray-dot.png';
            break;
          case 'break':
            icons_text = '판매중지';
            icons = '/design_publish/img/gray-dot.png';
            break;
          default:
            break;
        }
        return (
          <Marker
            key={marker.code}
            onClick={onClick}
            position={{lat: marker.lat, lng: marker.lng}}
            options={{icon: icons}}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  {'판매처: ' + marker.name}<br />
                  {'재고상태: ' + icons_text}<br />
                  {'주소: ' + marker.addr}<br />
                  {'입고시간: ' + marker.stock_at}
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
      mapRef: null,
      mapReflat: null,
      mapReflng: null,
    };
  }
  handleMapDrag = this.handleMapDrag.bind (this);
  handleMapLoad = this.handleMapLoad.bind (this);
  componentDidUpdate (newProps, newState) {
    //console.log ('this.state.mapFetchUrl === ', this.state.mapFetchUrl);
    //console.log ('this.props.fetchUrldata === ', this.props.fetchUrldata);
    if (this.state.mapFetchUrl === this.props.fetchUrldata) {
      console.log ('render()안에서 this는 Map.js콤포넌트 모듈 자신을 가리킨다.', this);
      return false;
    } else {
      //alert (this.state.mapFetchUrl);
      //alert ('Map: ' + this.props.fetchUrldata);
      this.setState ({mapFetchUrl: this.props.fetchUrldata});
      this.componentDidMount ();
    }
    console.log ('componentDidUpdate');
  }
  componentDidMount () {
    fetch (this.props.fetchUrldata).then (r => r.json ()).then (mapdata => {
      //console.log ('mapdata', mapdata);
      if (mapdata.count === 0) {
        /* this.setState ({
          shelters: [
            {
              addr: '충청남도 천안시 서북구 쌍용대로 223-1 (성정동)',
              code: '34836250',
              created_at: '2020/03/23 13:20:00',
              lat: 36.8174389,
              lng: 127.1349328,
              name: '토마토약국',
              remain_stat: 'empty',
              stock_at: '2020/03/23 08:50:00',
              type: '01',
            },
          ],
        }); */
        return false;
      } else {
        this.setState ({shelters: mapdata.stores});
        this.setState ({mapReflat: null});
        this.setState ({mapReflng: null});
      }
    });
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
    var localfetchUrl =
      'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=' +
      lat +
      '&lng=' +
      lng;
    //this.setState ({fetchUrldata: localfetchUrl});
    fetch (localfetchUrl).then (r => r.json ()).then (mapdata => {
      console.log ('mapdata', mapdata);
      if (mapdata.count === 0) {
        /* this.setState ({
          shelters: [
            {
              addr: '충청남도 천안시 서북구 쌍용대로 223-1 (성정동)',
              code: '34836250',
              created_at: '2020/03/23 13:20:00',
              lat: 36.8174389,
              lng: 127.1349328,
              name: '토마토약국',
              remain_stat: 'empty',
              stock_at: '2020/03/23 08:50:00',
              type: '01',
            },
          ],
        }); */
        return false;
      } else {
        this.setState ({shelters: mapdata.stores});
      }
    });
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
          <div className="secondMap" style={{height: '50vh'}} />
        }
        mapElement={<div style={{height: '100%'}} />}
      />
    );
  }
}
