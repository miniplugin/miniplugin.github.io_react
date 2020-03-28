import React, {Component} from 'react';
class HeaderBanner extends Component {
  //무조건 render()가 호출되는 상황을 방지 false, true
  shouldComponentUpdate (newProps, newState) {
    if (this.props.data === newProps.data) {
      console.log ('HeaderBanner.js콤포넌트 값 무변경시 리로드 render()방지');
      return false;
    }
    return true;
  }
  render () {
    console.log ('render()안에서 this는 HeaderBanner.js콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <div className="location_area customer">
        <div className="box_inner">
          <h2 className="tit_page">
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault ();
                this.props.onChangePage ();
              }.bind (this)}
            >
              {this.props.title}
            </a>
          </h2>
          <p className="location">
            Google Maps API 키를 입력하지 않았기 때문에 아래와 같은 메세지가 나옵니다.
            <span className="path">/</span><br /><br />
            [ {this.props.sub} ] - 하지만, 결과를 확인 하시는 데 지장은 없습니다.
            <br /><br />[지도에 표시된 핀 이미지 색상의 의미]<br />
            <img src="/design_publish/img/red-dot.png" alt="plenty" />
            [확진 0~1일 미만] /
            <img src="/design_publish/img/yellow-dot.png" alt="some" />
            [확진 1~3일 미만] /
            <img src="/design_publish/img/green-dot.png" alt="few" />
            [확진 4~9일 미만]  /
            <img src="/design_publish/img/gray-dot.png" alt="empty,break" />
            [확진 9일 이상은 자료가 많아서 제외]
          </p>
          <ul className="page_menu clear">
            [지도에 표시된 핀 이미지 색상의 의미]<br /><br />
            <li>
              <img src="/design_publish/img/red-dot.png" alt="plenty" />
              [확진 0~1일 미만]
              <img src="/design_publish/img/yellow-dot.png" alt="some" />
              [확진 1~3일 미만]
            </li>
            <li>
              <img src="/design_publish/img/green-dot.png" alt="few" />
              [확진 4~9일 미만]
              <img src="/design_publish/img/gray-dot.png" alt="empty,break" />
              [확진 9일 이상은 자료가 많아서 제외]
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default HeaderBanner;
