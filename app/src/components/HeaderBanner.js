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
            고객센터 <span className="path">/</span> {this.props.sub}
          </p>
          <ul className="page_menu clear">
            <li>
              <a
                href="/"
                onClick={function (e) {
                  e.preventDefault ();
                  this.props.onChangePage ();
                }.bind (this)}
              >
                {this.props.title}
              </a>
            </li>
            <li>{this.props.sub}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default HeaderBanner;
