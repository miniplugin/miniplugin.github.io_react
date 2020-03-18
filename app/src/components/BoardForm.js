import React, {Component} from 'react';
class BoardForm extends Component {
  //무조건 render()가 호출되는 상황을 방지 false, true
  shouldComponentUpdate (newProps, newState) {
    if (this.props.data === newProps.data) {
      console.log ('BoardForm.js콤포넌트 값 무변경시 리로드 render()방지');
      return false;
    }
    return true;
  }
  render () {
    console.log ('render()안에서 this는 BoardForm.js콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <div>
        {/* <!-- BoardForm --> */}
        <form
          action="/create_process"
          className="appForm"
          method="post"
          onSubmit={function (e) {
            e.preventDefault ();
            //alert ('등록');//디버그
            //debugger; //크롬 디버거 연동
            this.props.onSubmit (e.target.title.value, e.target.desc.value);
          }.bind (this)}
        >
          <fieldset>
            <legend>한줄게시판 입력 양식</legend>
            <p className="info_pilsoo pilsoo_item">필수입력</p>
            <ul className="app_list">
              <li className="clear">
                <label htmlFor="title" className="tit_lbl pilsoo_item">
                  제목
                </label>
                <div className="app_content">
                  <input
                    type="text"
                    className="w100p"
                    id="title"
                    placeholder="제목을 입력해주세요"
                  />
                </div>
              </li>
              <li className="clear">
                <label htmlFor="desc" className="tit_lbl">내용</label>
                <div className="app_content">
                  <textarea
                    id="desc"
                    className="w100p"
                    placeholder="내용을 입력해주세요"
                  />
                </div>
              </li>
            </ul>
            <p className="btn_line">
              <input
                type="submit"
                className="btn_baseColor"
                value="등록"
                style={{cursor: 'pointer'}}
              />
            </p>
          </fieldset>
        </form>
        {/* <!-- //BoardForm --> */}
      </div>
    );
  }
}
export default BoardForm;
