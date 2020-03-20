import React, {Component} from 'react';
//react-inline-script vs react-safe va react-helmet
//npm install --save react-helmet @types/react-helmet
class BoardView extends Component {
  componentDidMount () {
    /* //구글지도 외부 js 불러오기
      var loadScript = function (src) {
      var tag = document.createElement ('script');
      tag.async = false;
      tag.src = src;
      document.body.appendChild (tag);
      //document.getElementsByTagName ('body').appendChild (tag);
    };
    loadScript ('//maps.google.com/maps/api/js?sensor=true');
    loadScript ('/design_publish/js/location.js');
    const script = document.createElement ('script');
    script.src = '//maps.google.com/maps/api/js?sensor=true';
    script.async = true;
    document.body.appendChild (script); */
  }
  render () {
    console.log ('render()안에서 this는 BoardView.js콤포넌트 모듈 자신을 가리킨다.', this);
    var i = 0;
    return (
      <div>
        {/* <!-- 지도 사용 공간 --> */}
        <div id="map_canvas" style={{width: '100%', height: '100%'}} />
        {/* <!-- BoardView --> */}
        <ul className="bbsview_list">
          <li className="bbs_title">{this.props.name}</li>
          <li className="bbs_content">
            <div className="editer_content">
              {/* this.props.desc.replace (/\n/g, '<br/>') */}
              {this.props.addr.split ('\n').map (line => {
                return <span key={i++}>{line}<br /></span>;
              })}
            </div>
          </li>
          <li className="bbs_title">코드:{this.props.code}</li>
          <li className="bbs_title">위도:{this.props.lat}</li>
          <li className="bbs_title">경도:{this.props.lng}</li>
          <li className="bbs_title">타입:{this.props.type}</li>
          <li className="bbs_title">입고시간:{this.props.stock_at}</li>
          <li className="bbs_title">재고상태:{this.props.remain_stat}</li>
          <li className="bbs_title">데이터생성일자:{this.props.created_at}</li>
        </ul>
        {/* <!-- //BoardView --> */}
      </div>
    );
  }
}
export default BoardView;
