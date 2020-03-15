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
  render () {
    return (
      <div className="App">
        <HeaderBanner title="리액트 IN 자바스크립트" sub="한줄게시판" />
        <BoardList />
        <BoardView title="리액트 IN 자바스크립트? 미션 프로젝트 (한줄게시판 만들기)" desc="이 프로젝트는 리액트를 이용해서 CRUD를 실습해 볼 수 있습니다." />
      </div>
    );
  }
}

export default App;
