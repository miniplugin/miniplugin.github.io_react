/* App.js */
import React, {Component} from 'react';
import HeaderBanner from './components/HeaderBanner';
import BoardList from './components/BoardList';
import BoardView from './components/BoardView';
import './App.css';
//헤더 컴포넌트를 만드는 코드(src/components/HeaderBanner.js)

//리스트제목 컴포넌트를 만드는 코드(src/components/BoardList.js)

//리스트뷰 컴포넌트를 만드는 코드(src/components/BoardView.js)

//메인 컴포넌트를 만드는 코드(아래)
class App extends Component {
  //콤포넌트 생성자 : 콤포넌트 실행시 자동 실행(초기화)
  constructor (props) {
    //props(속성) 과 state(자료) 관계
    super (props); //부모클래스-Component의 props속성을 사용하겠다고 선언, 이후 부터 this 키워드 사용가능
    //부모클래스 props속성의 state값 초기화
    this.state = {
      headerBanner: {title: '리액트 IN 자바스크립트', sub: '한줄게시판'}, //1차원 배열 json 데이터
      boardList: [
        //2차원 배열 json 데이터
        {
          id: 1,
          title: '리액트 IN 자바스크립트? 미션 프로젝트 (한줄게시판 만들기)1',
          desc: '이 프로젝트는 리액트를 이용해서 CRUD를 실습해 볼 수 있습니다.1',
        },
        {
          id: 2,
          title: '리액트 IN 자바스크립트? 미션 프로젝트 (한줄게시판 만들기)2',
          desc: '이 프로젝트는 리액트를 이용해서 CRUD를 실습해 볼 수 있습니다.2',
        },
        {
          id: 3,
          title: '리액트 IN 자바스크립트? 미션 프로젝트 (한줄게시판 만들기)3',
          desc: '이 프로젝트는 리액트를 이용해서 CRUD를 실습해 볼 수 있습니다.3',
        },
      ],
    };
  }
  render () {
    //constructor (props) 부모클래스의 초기화한 값을 아래 태그의 속성(props)에 this값으로 전달
    return (
      <div className="App">
        <HeaderBanner
          title={this.state.headerBanner.title}
          sub={this.state.headerBanner.sub}
        />
        <BoardList data={this.state.boardList} />
        <BoardView
          title="리액트 IN 자바스크립트? 미션 프로젝트 (한줄게시판 만들기)"
          desc="이 프로젝트는 리액트를 이용해서 CRUD를 실습해 볼 수 있습니다."
        />
      </div>
    );
  }
}

export default App;
