import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
//구글맵 기술참조: https://github.com/google-map-react/google-map-react //사용함.
//npm install --save google-map-react //사용함.
class BoardView extends Component {
  constructor (props) {
    super (props); //부모클래스-Component의 props속성을 사용하겠다고 선언, 이후 부터 this 키워드 사용가능
    this.state = {
      center: {
        lat: this.props.lat, //36.818434,
        lng: this.props.lng, //127.1527916,
      },
      zoom: 18,
      showMyComponent: 'show',
    };
  }
  renderSwitch (param) {
    switch (param) {
      case 'plenty':
        return '100개이상';
      case 'some':
        return '30개 이상 100개미만';
      case 'few':
        return '2개 이상 30개 미만';
      case 'empty':
        return '1개 이하';
      case 'break':
        return '판매중지';
      default:
        return '정보없음';
    }
  }
  renderCssSwitch (param) {
    switch (param) {
      case 'plenty':
        return 'plenty';
      case 'some':
        return 'some';
      case 'few':
        return 'few';
      case 'empty':
        return 'empty';
      case 'break':
        return 'break';
      default:
        return '';
    }
  }
  render () {
    const onMarkerClick = evt => {
      //alert (this.props.showMyComponent);
      //alert (this.state.showMyComponent);
      if (this.state.showMyComponent === undefined) {
        this.setState ({showMyComponent: 'show'});
      } else {
        this.setState ({showMyComponent: undefined});
      }
    };
    const onMarkerDeleteClick = evt => {
      this.setState ({showMyComponent: undefined});
    };
    const AnyReactComponent = ({text}) => (
      <div>
        <div
          className={this.renderCssSwitch (this.props.remain_stat)}
          style={{
            width: 'max-content',
            border: '1px solid',
            padding: '5px',
            fontweight: 'bold',
          }}
          onClick={onMarkerClick}
        >
          {text}
        </div>
        <div
          className="pop"
          style={
            this.state.showMyComponent
              ? {
                  background: 'white',
                  width: 'max-content',
                  border: '1px solid',
                  padding: '5px',
                  fontweight: 'bold',
                }
              : {display: 'none'}
          }
          onClick={onMarkerDeleteClick}
        >
          {'판매처: ' + this.props.name}<br />
          {'재고상태: ' + this.renderSwitch (this.props.remain_stat)}<br />
          {'주소: ' + this.props.addr}<br />
          {'입고시간: ' + this.props.stock_at}
        </div>
      </div>
    );
    var new_center = {
      lat: this.props.lat, //36.818434,
      lng: this.props.lng, //127.1527916,
    };
    console.log ('render()안에서 this는 BoardView.js콤포넌트 모듈 자신을 가리킨다.', this);
    //var i = 0;//아래 textarea 에서 사용시.
    return (
      <div>
        {/* <!-- 지도 사용 공간 --> */}
        <div id="map_canvas" style={{width: '100%', height: '50vh'}}>
          <GoogleMapReact
            //bootstrapURLKeys={{key: 'YOUR KEY HERE'}}//
            defaultCenter={this.state.center}
            center={new_center}
            defaultZoom={this.state.zoom}
          >
            <AnyReactComponent
              lat={this.props.lat}
              lng={this.props.lng}
              text={this.props.name}
            />

          </GoogleMapReact>
        </div>
        {/* <!-- BoardView --> */}
        {/*this.props.desc.replace (/\n/g, '<br/>')*/}
        {/* <ul className="bbsview_list">
          <li className="bbs_title">{this.props.name}</li>
          <li className="bbs_content">
            <div className="editer_content">
              {this.props.addr.split ('\n').map (line => {
                return <span key={i++}>{line}<br /></span>;
              })}
            </div>
          </li>
          <li className="bbs_title">위도:{this.props.lat}</li>
          <li className="bbs_title">경도:{this.props.lng}</li>
          <li className="bbs_title">타입:{this.props.type}</li>
          <li className="bbs_title">입고시간:{this.props.stock_at}</li>
          <li className="bbs_title">재고상태:{this.props.remain_stat}</li>
          <li className="bbs_title">데이터생성일자:{this.props.created_at}</li>
        </ul> */}
        {/* <!-- //BoardView --> */}
      </div>
    );
  }
}
export default BoardView;
