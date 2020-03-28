import React, {Component} from 'react';
class SearchForm extends Component {
  //검색폼 내용 수정
  constructor (props) {
    super (props);
    this.state = {
      searchWord: this.props.searchWord,
    };
    this.inputFormHandler = this.inputFormHandler.bind (this);
  }
  inputFormHandler (e) {
    console.log (e.target.value);
    this.setState ({[e.target.id]: e.target.value});
  }
  render () {
    console.log ('render()안에서 this는 SearchForm.js콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <form
        action="/search_process"
        className="minisrch_form"
        method="post"
        onSubmit={function (e) {
          e.preventDefault ();
          //alert ('검색'); //디버그
          this.props.onSubmit (e.target.searchWord.value);
        }.bind (this)}
      >
        <fieldset>
          <legend>검색</legend>
          <input
            id="searchWord"
            type="search"
            className="tbox"
            title="검색어를 입력해주세요"
            placeholder="반드시, 시 또는 도(축약:예 충남)만 입력"
            value={this.state.searchWord}
            onChange={this.inputFormHandler}
          />
          <input
            type="submit"
            className="btn_srch"
            value="검색"
            style={{cursor: 'pointer'}}
          />
        </fieldset>
      </form>
    );
  }
}
export default SearchForm;
