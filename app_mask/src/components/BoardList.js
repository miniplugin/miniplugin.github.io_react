import React, {Component} from 'react';
class BoardList extends Component {
  //무조건 render()가 호출되는 상황을 방지 false, true
  shouldComponentUpdate (newProps, newState) {
    if (this.props.data === newProps.data) {
      console.log ('BoardList.js콤포넌트 값 무변경시 리로드 render()방지');
      return false;
    }
    return true;
  }
  renderSwitch (param) {
    switch (param) {
      case 'plenty':
        return '100개이상';
      case 'some':
        return '30개 이상 100개미만';
      case 'few':
        return '2개 이상 30개 미만';
      case 'empty':
        return '1개 이하';
      case 'break':
        return '판매중지';
      default:
        return '정보없음';
    }
  }
  renderCssSwitch (param) {
    switch (param) {
      case 'plenty':
        return 'plenty';
      case 'some':
        return 'some';
      case 'few':
        return 'few';
      case 'empty':
        return 'empty';
      case 'break':
        return 'break';
      default:
        return '';
    }
  }
  render () {
    console.log ('render()안에서 this는 BoardList.js콤포넌트 모듈 자신을 가리킨다.', this);
    //출력 데이터 처리
    var lists = [];
    var data = this.props.data;
    if (data == null) {
      alert ('데이터가 없습니다.');
      return false;
    }
    var listCount = data.length;
    var i = 0;
    while (i < data.length) {
      lists.push (
        //반복구문 key값-고유값 처리
        <tr key={data[i].code}>
          <td>{data[i].name} </td>
          <td className="tit_notice">
            <a
              href={'/board/' + data[i].code}
              data-code={data[i].code} //이 부분을 사용하지 않는다면, 아래 //주석부분처럼 값을 변경해야 합니다.
              onClick={function (e) {
                //(id,e)
                //debugger;//크롬 디버거연동
                e.preventDefault ();
                this.props.onChangePage (e.target.dataset.code);
              }.bind (this)} //(this, data[i].code)
            >
              {data[i].addr}
            </a>
          </td>
          <td className={this.renderCssSwitch (data[i].remain_stat)}>
            {this.renderSwitch (data[i].remain_stat)}
          </td>
          <td>{data[i].stock_at} </td>
          <td>{data[i].created_at} </td>
          <td>{data[i].lat}, {data[i].lng}</td>
        </tr>
      );
      i = i + 1;
    }
    return (
      <div>
        {/* <!-- BoardList --> */}
        <table className="bbsListTbl" summary="번호,주소,코드,위도,경도,약국명,타입 등을 제공하는 표">
          <caption className="hdd">
            공지사항 목록
          </caption>
          <thead>
            <tr>
              <th scope="col">판매처명</th>
              <th scope="col">주소[검색: {listCount} 개]</th>
              <th scope="col">재고상태</th>
              <th scope="col">입고시간</th>
              <th scope="col">생성일자</th>
              <th scope="col">위도,경도</th>
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
