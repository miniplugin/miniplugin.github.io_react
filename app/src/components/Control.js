import React, {Component} from 'react';
class Control extends Component {
  render () {
    console.log ('render()안에서 this는 Control.js콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <p className="btn_line txt_right">
        <a
          href="/list"
          onClick={function (e) {
            e.preventDefault ();
            this.props.onChangeMode ('list', '0');
          }.bind (this)}
          className="btn_bbs"
        >
          목록
        </a>
        <a
          href="/create"
          onClick={function (e) {
            e.preventDefault ();
            this.props.onChangeMode ('create', '0');
          }.bind (this)}
          className="btn_bbs"
        >
          등록
        </a>
        <a
          href="/update"
          onClick={function (e) {
            e.preventDefault ();
            this.props.onChangeMode ('update', '0');
          }.bind (this)}
          className="btn_bbs"
        >
          수정
        </a>
        <a
          href="/"
          onClick={function (e) {
            e.preventDefault ();
            this.props.onChangeMode ('delete', '0');
          }.bind (this)}
          className="btn_bbs"
        >
          삭제
        </a>
      </p>
    );
  }
}
export default Control;
