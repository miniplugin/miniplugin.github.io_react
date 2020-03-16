import React, {Component} from 'react';
class BoardList extends Component {
  render () {
    console.log ('render()안에서 this는 콤포넌트 모듈 자신을 가리킨다.', this);
    //출력 데이터 처리
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push (
        //반복구문 key값-고유값 처리
        <li key={data[i].id}>
          <span>{data[i].id} </span>
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
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}
export default BoardList;
