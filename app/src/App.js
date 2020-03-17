/* App.js */
import React, {Component} from 'react';
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import BoardList from './components/BoardList';
import BoardView from './components/BoardView';
import Footer from './components/Footer';
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
      mode: 'default', //변수에 초기값 지정
      //selected_boardView_id: 2, //선택한 게시물 번호 강제로 초기화 할때,
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
  //props-state의 값이 바뀌면 html을 그리는 함수 render 자동으로 재 실행됨
  render () {
    console.log ('render()안에서 this는 App.js콤포넌트 모듈 자신을 가리킨다.', this);
    var _title, _desc = null;
    if (this.state.mode === 'default') {
      _title = this.state.headerBanner.title;
      _desc = this.state.headerBanner.sub;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.boardList.length) {
        var data = this.state.boardList[i];
        if (data.id === this.state.selected_boardView_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      //초기값 강제로 줄때(아래)
      /* _title = this.state.boardList[0].title;
      _desc = this.state.boardList[0].desc; */
    }
    //constructor (props) 부모클래스의 초기화한 값을 아래 태그의 속성(props)에 this값으로 전달
    return (
      <div className="App">
        <Header />
        <div id="container">
          <HeaderBanner
            title={this.state.headerBanner.title}
            sub={this.state.headerBanner.sub}
            onChangePage={function () {
              //alert ('HeaderBanner');//디버그
              this.setState ({mode: 'default'});
            }.bind (this)}
          />
          {/* <header>
            <h1>
              <a
                href="/"
                onClick={function (e) {
                  console.log (e);
                  e.preventDefault ();
                  //this.state.mode = 'read';//작동않됨.
                  this.setState ({mode: 'default'});
                  //debugger; //크롬 개발자도구 Sources 에서 현재 라인에서 멈춤
                }.bind (this)} //함수내에서 this사용시 bind 로 주입필요
              >
                {this.state.headerBanner.title}
              </a>
            </h1>
            {this.state.headerBanner.sub}
          </header> */}
          {/* <!-- bodytext_area --> */}
          <div className="bodytext_area box_inner">
            <BoardList
              onChangePage={function (id) {
                //alert ('BoardList');//디버그
                //debugger;크롬 디버거연동
                this.setState ({
                  mode: 'read',
                  selected_boardView_id: Number (id),
                });
              }.bind (this)}
              data={this.state.boardList}
            />
            <BoardView title={_title} desc={_desc} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
