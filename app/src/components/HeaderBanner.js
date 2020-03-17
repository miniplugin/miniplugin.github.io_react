import React, {Component} from 'react';
class HeaderBanner extends Component {
  render () {
    console.log ('render()안에서 this는 콤포넌트 모듈 자신을 가리킨다.', this);
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
