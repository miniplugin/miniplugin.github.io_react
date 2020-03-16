import React, {Component} from 'react';
class HeaderBanner extends Component {
  render () {
    console.log ('render()안에서 this는 콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault ();
              this.props.onChangePage ();
            }.bind (this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}
export default HeaderBanner;
