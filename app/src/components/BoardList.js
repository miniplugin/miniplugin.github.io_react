import React, {Component} from 'react';
class BoardList extends Component {
  render () {
    console.log ('render()안에서 this는 BoardList.js콤포넌트 모듈 자신을 가리킨다.', this);
    //출력 데이터 처리
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push (
        //반복구문 key값-고유값 처리
        <tr key={data[i].id}>
          <td>{data[i].id} </td>
          <td className="tit_notice">
            <a
              href={'/board/' + data[i].id}
              data-id={data[i].id} //이 부분을 사용하지 않는다면, 아래 //주석부분처럼 값을 변경해야 합니다.
              onClick={function (e) {
                //(id,e)
                //debugger;//크롬 디버거연동
                e.preventDefault ();
                this.props.onChangePage (e.target.dataset.id);
              }.bind (this)} //(this, data[i].id)
            >
              {data[i].title}
            </a>
          </td>
        </tr>
      );
      i = i + 1;
    }
    return (
      <div>
        <form action="#LINK" className="minisrch_form">
          <fieldset>
            <legend>검색</legend>
            <input
              type="text"
              className="tbox"
              title="검색어를 입력해주세요"
              placeholder="검색어를 입력해주세요"
            />
            <a href="#LINK" className="btn_srch">검색</a>
          </fieldset>
        </form>
        {/* <!-- BoardList --> */}
        <table className="bbsListTbl" summary="번호,제목,조회수,작성일 등을 제공하는 표">
          <caption className="hdd">
            공지사항 목록
          </caption>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
            </tr>
          </thead>
          <tbody>
            {lists}
          </tbody>
        </table>
        {/* <!-- //BoardList --> */}
      </div>
    );
  }
}
export default BoardList;
