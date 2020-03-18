import React, {Component} from 'react';
class Control extends Component {
  //무조건 render()가 호출되는 상황을 방지 false, true
  shouldComponentUpdate (newProps, newState) {
    if (this.props.data === newProps.data) {
      console.log ('Control.js콤포넌트 값 무변경시 리로드 render()방지');
      return false;
    }
    return true;
  }
  render () {
    console.log ('render()안에서 this는 Control.js콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <p className="btn_line txt_right">
        <a
          href="/list"
          onClick={function (e) {
            e.preventDefault ();
            this.props.onChangeMode ('list');
          }.bind (this)}
          className="btn_bbs"
        >
          목록
        </a>
        <a
          href="/create"
          onClick={function (e) {
            e.preventDefault ();
            this.props.onChangeMode ('create');
          }.bind (this)}
          className="btn_bbs"
        >
          등록
        </a>
        <a
          href="/update"
          onClick={function (e) {
            e.preventDefault ();
            this.props.onChangeMode ('update');
          }.bind (this)}
          className="btn_bbs"
        >
          수정
        </a>
        <a
          href="/"
          onClick={function (e) {
            e.preventDefault ();
            this.props.onChangeMode ('delete');
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
