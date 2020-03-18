/* App.js */
import React, {Component} from 'react';
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import BoardList from './components/BoardList';
import Control from './components/Control';
import BoardView from './components/BoardView';
import BoardForm from './components/BoardForm';
import BoardFormUpdate from './components/BoardFormUpdate';
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
    this.max_board_id = 3; //전역변수 BoardList의 최근 입력 Key값 초기화
    //부모클래스 props속성의 state값 초기화
    this.state = {
      mode: 'default', //변수에 초기값 지정
      selected_boardView_id: null, //선택한 게시물 번호 강제로 초기화 할때,
      headerBanner: {title: '리액트 IN 자바스크립트', sub: '한줄게시판'}, //json 1차원 데이터 객체
      //배열 2차원 데이터(아래)
      boardList: [
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
  getBoardViewContent () {
    var i = 0;
    while (i < this.state.boardList.length) {
      var data = this.state.boardList[i];
      if (data.id === this.state.selected_boardView_id) {
        return data;
        //break;
      }
      i = i + 1;
    }
  }
  getBoardView () {
    var _title, _desc = null, _article = null, _content = null;
    if (this.state.mode === 'default') {
      _title = this.state.headerBanner.title;
      _desc = this.state.headerBanner.sub;
      _article = <BoardView id={'헤더배너'} title={_title} desc={_desc} />;
    } else if (this.state.mode === 'list') {
      _article = null;
      //this.state.selected_boardView_id = 0;
    } else if (this.state.mode === 'create') {
      _article = (
        <BoardForm
          onSubmit={function (_title, _desc) {
            //신규 BoradList 내용 추가
            console.log (_title, _desc); //디버그
            this.max_board_id = this.max_board_id + 1;
            //boardList배열 마지막에 값 추가하기 concat함수(원본복제생성 후 변경) 사용-immutable(원본불변)
            //boardList배열 마지막에 값 추가하기 push함수(원본데이터 변경) 사용
            //boardList배열 마지막에 값 추가하기 Array.from+push함수(원본복제생성 후 변경) 사용-immutable(원본불변)
            /* this.state.boardList.push ({
              id: this.max_board_id,
              title: _title,
              desc: _desc,
            }); this.setState ({boardList: this.state.boardList}); */
            //boardList배열 마지막에 값 추가하기 concat함수(기존 데이터에 추가) 사용-속도 향상
            /* var _contents = this.state.boardList.concat ({
              id: this.max_board_id,
              title: _title,
              desc: _desc,
            });  */
            var _contents = Array.from (this.state.boardList); //배열일때
            //var _contents = Object.assign ({}, this.state.boardList);//json 객체일때 사용법.
            _contents.push ({
              id: this.max_board_id,
              title: _title,
              desc: _desc,
            });
            //화면 리프레시가 않됨-관련함수:shouldComponentUpdate.
            this.setState ({boardList: _contents});
            this.setState ({
              mode: 'read',
              selected_boardView_id: this.max_board_id,
            });
          }.bind (this)}
        />
      );
    } else if (this.state.mode === 'update') {
      _content = this.getBoardViewContent ();
      //if (_content === undefined) {
      if (this.state.selected_boardView_id === null) {
        console.log ('update제약', _content);
        _title = '수정확인';
        _desc = '게시물을 선택하셔야 합니다.';
        _article = <BoardView title={_title} desc={_desc} />;
        return _article;
      }
      _article = (
        <BoardFormUpdate
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            //신규 BoradList 내용 추가
            console.log ('update', _id, _title, _desc); //디버그
            var _contents = Array.from (this.state.boardList); //배열복제
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = {id: _id, title: _title, desc: _desc};
                break;
              }
              i = i + 1;
            }
            //화면 리프레시가 않됨-관련함수:shouldComponentUpdate.
            this.setState ({boardList: _contents, mode: 'read'});
          }.bind (this)}
        />
      );
    } else if (this.state.mode === 'delete') {
      _article = null;
      console.log ('delete후 출력');
      _title = '삭제확인';
      _desc = '게시물이 정상 삭제되었습니다.';
      _article = <BoardView title={_title} desc={_desc} />;
      return _article;
    } else if (this.state.mode === 'read') {
      _content = this.getBoardViewContent ();
      _article = (
        <BoardView
          id={_content.id}
          title={_content.title}
          desc={_content.desc}
        />
      );
      //초기값 강제로 줄때(아래)
      /* _title = this.state.boardList[0].title;
      _desc = this.state.boardList[0].desc; */
    }
    return _article;
  }
  //props-state의 값이 바뀌면 html을 그리는 함수 render 자동으로 재 실행됨
  render () {
    console.clear ();
    console.log ('render()안에서 this는 App.js콤포넌트 모듈 자신을 가리킨다.', this);

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
              this.setState ({mode: 'default', selected_boardView_id: null});
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
            <Control
              onChangeMode={function (_mode) {
                if (_mode === 'list') {
                  this.setState ({
                    selected_boardView_id: null,
                  });
                }
                if (_mode === 'delete') {
                  if (this.state.selected_boardView_id === null) {
                    alert ('선택된 게시물이 없습니다.');
                    return false;
                  }
                  if (window.confirm ('정말로 삭제하시겠습니까?')) {
                    var _deleteContents = Array.from (this.state.boardList);
                    var i = 0;
                    while (i < _deleteContents.length) {
                      if (
                        _deleteContents[i].id ===
                        this.state.selected_boardView_id
                      ) {
                        _deleteContents.splice (i, 1);
                        this.setState ({
                          selected_boardView_id: null,
                        });
                        break;
                      }
                      i = i + 1;
                    }
                    this.setState ({
                      boardList: _deleteContents,
                      mode: 'delete',
                    });
                  }
                } else {
                  this.setState ({
                    mode: _mode,
                  });
                }
              }.bind (this)}
            />
            {this.getBoardView ()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
