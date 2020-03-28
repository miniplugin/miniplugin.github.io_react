/* App.js */
import React, {Component} from 'react';
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import Map from './components/Map';
import './App.css';
//헤더 컴포넌트를 만드는 코드(src/components/HeaderBanner.js)

//외부 데이터 확인용(도메인은 proxy로 package.json에 지정 + /javascripts/ndata.js)
/* const url = '/javascripts/ndata.js';
fetch (url)
  .then (response => response.text ())
  .then (contents => console.log ('JSONP--------------: ', contents))
  .catch (() =>
    console.log ('Can’t access ' + url + ' response. Blocked by browser?')
  ); */

//메인 컴포넌트를 만드는 코드(아래)
class App extends Component {
  //콤포넌트 생성자 : 콤포넌트 실행시 자동 실행(초기화)
  constructor (props) {
    //props(속성) 과 state(자료) 관계
    super (props); //부모클래스-Component의 props속성을 사용하겠다고 선언, 이후 부터 this 키워드 사용가능

    //부모클래스 props속성의 state값 초기화
    this.state = {
      searchWord: '충청남도 천안시', //검색어 상태 입력예, 도(광역시) 시(군) 단위입력
      fetchUrl: '/ndata.js',
      headerBanner: {
        title: '이 사이트는 리액트기술 테스트용 입니다.',
        sub: 'Google 지도를 제대로 로드할 수 없습니다.',
      }, //json 1차원 데이터 객체
    };
  }

  componentDidMount () {
    //query = encodeURIComponent (this.state.searchWord);
  }
  //props-state의 값이 바뀌면 html을 그리는 함수 render 자동으로 재 실행됨
  render () {
    //console.clear (); //콘솔 지저분한것 때문에... 디버그시 주석해제 필요.
    console.log ('render()안에서 this는 App.js콤포넌트 모듈 자신을 가리킨다.', this);

    //constructor (props) 부모클래스의 초기화한 값을 아래 태그의 속성(props)에 this값으로 전달
    return (
      <div className="App">
        <Header />
        <div id="container">
          <HeaderBanner
            title={this.state.headerBanner.title}
            sub={this.state.headerBanner.sub}
          />
          {/* <!-- bodytext_area --> */}
          <div className="bodytext_area box_inner">
            <SearchForm
              searchWord={this.state.searchWord}
              onSubmit={function (_searchWord) {
                console.log ('_searchWord', _searchWord); //디버그
                this.setState ({seearchWord: _searchWord});
                //화면 리프레시가 않됨-관련함수:shouldComponentUpdate.
              }.bind (this)}
            />
            <Map
              fetchUrldata={this.state.fetchUrl}
              searchWorddata={this.state.searchWord}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
