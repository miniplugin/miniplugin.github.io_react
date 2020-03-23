import React, {Component} from 'react';
import {compose} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
const MapWithAMarker = compose (withScriptjs, withGoogleMap) (props => {
  //console.log ('props.markers: ----------- ' + props.markers);
  return (
    <GoogleMap
      defaultZoom={16.3}
      defaultCenter={{lat: props.markers[0].lat, lng: props.markers[0].lng}}
      center={{
        lat: props.markers[0].lat, //36.818434,
        lng: props.markers[0].lng, //127.1527916,
      }}
    >
      {props.markers.map (marker => {
        //console.log (marker);//디버그
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
    };
  }
  componentDidUpdate (newProps, newState) {
    //console.log (newState);
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
    var result = null;
    result = fetch (this.props.fetchUrldata)
      .then (r => r.json ())
      .then (mapdata => {
        this.setState ({shelters: mapdata.stores});
      });
    //console.log ('result: 누락되는 경우 대비 실행---------- ' + result);
    if (result === null) {
      fetch (this.props.fetchUrldata).then (r => r.json ()).then (data => {
        this.setState ({shelters: data.stores});
      });
    }
  }
  handleClick = (marker, event) => {
    // console.log({ marker })
    this.setState ({selectedMarker: marker});
  };
  render () {
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.state.shelters}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '400px'}} />}
        mapElement={<div style={{height: '100%'}} />}
      />
    );
  }
}
