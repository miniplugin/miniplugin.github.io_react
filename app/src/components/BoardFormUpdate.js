import React, {Component} from 'react';
class BoardFormUpdate extends Component {
  //기존 데이터 불러오기
  constructor (props) {
    super (props);
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc,
      id: this.props.data.id,
    };
    this.inputFormHandler = this.inputFormHandler.bind (this);
  }
  /* 아래 inputFormHandler(e)로 교체
  onChange={function (e) {
    console.log (e.target.value);
    this.setState ({title: e.target.value});
  }.bind (this)} */
  inputFormHandler (e) {
    console.log (e.target.value);
    this.setState ({[e.target.id]: e.target.value});
  }
  render () {
    console.log ('update 기존 값을 가리킨다.', this.props.data);
    console.log ('render()안에서 this는 BoardFormUpdate.js콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <div>
        {/* <!-- BoardForm --> */}
        <form
          action="/update_process"
          className="appForm"
          method="post"
          onSubmit={function (e) {
            e.preventDefault ();
            //alert ('등록');//디버그
            //debugger; //크롬 디버거 연동
            this.props.onSubmit (
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind (this)}
        >
          <input type="hidden" id="id" value={this.state.id} />
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
                    value={this.state.title}
                    onChange={this.inputFormHandler}
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
                    value={this.state.desc}
                    onChange={function (e) {
                      console.log (e.target.value);
                      this.setState ({desc: e.target.value});
                    }.bind (this)}
                  />
                </div>
              </li>
            </ul>
            <p className="btn_line">
              <input
                type="submit"
                className="btn_baseColor"
                value="수정"
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
export default BoardFormUpdate;
