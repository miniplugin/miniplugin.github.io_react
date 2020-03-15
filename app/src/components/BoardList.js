import React, {Component} from 'react';
class BoardList extends Component {
  render () {
    //출력 데이터 처리
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push (
        //반복구문 key값-고유값 처리
        <li key={data[i].id}>
          <span>{data[i].id} </span>
          <a href={'/board/' + data[i].id}>{data[i].title}</a>
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
