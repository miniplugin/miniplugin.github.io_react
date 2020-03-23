/* App.js */
import React, {Component} from 'react';
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import SearchForm from './components/SearchForm';
import BoardList from './components/BoardList';
import BoardView from './components/BoardView';
import Footer from './components/Footer';
import Map from './components/Map';
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
    this.max_board_id = 2; //전역변수 BoardList의 최근 입력 Key값 초기화

    //부모클래스 props속성의 state값 초기화
    this.state = {
      mode: 'list', //변수에 초기값 지정
      selected_boardView_id: null, //선택한 게시물 번호 강제로 초기화 할때,
      searchWord: '충청남도 천안시 동남구 신부동', //검색어 상태 입력예, 충청남도 천안시 동남구 신부동
      fetchUrl: 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=36.818434&lng=127.1527916',
      headerBanner: {
        title: '이 사이트는 리액트기술 테스트용 입니다.',
        sub: 'Google 지도를 제대로 로드할 수 없습니다.',
      }, //json 1차원 데이터 객체
      //배열 2차원 데이터(아래)
      boardList: [],
      /* boardList: [
        {
          addr: '충청남도 홍성군 갈산면 상촌로 12-1 (두류동)',
          code: '1',
          lat: 36.6029863,
          lng: 126.5489114,
          name: '신신약국',
          type: '01',//판매처 유형[약국: '01', 우체국: '02', 농협: '03']
          stock_at: '입고시간',
          remain_stat: '재고 상태',
          created_at: '데이터 생성 일자',
          //[100개 이상(녹색): 'plenty' / 30개 이상 100개미만(노랑색): 'some' / 2개 이상 30개 미만(빨강색): 'few' / 1개 이하(회색): 'empty' / 판매중지: 'break']"
        },
      ], */
    };
  }

  //초기 공공데이터 json(텍스트로변환된) 내용 받아오기
  componentDidMount (_searchWord) {
    var boardList_storeInfos = null; //
    var localfetchUrl = null;
    var query = null;
    //alert (encodeURIComponent (_searchWord));
    if (_searchWord === undefined) {
      /*localfetchUrl =
      ('https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=36.818434&lng=127.1527916');*/
      query = encodeURIComponent (this.state.searchWord);
      localfetchUrl =
        'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=' +
        query;
    } else {
      query = encodeURIComponent (_searchWord);
      localfetchUrl =
        'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=' +
        query;
    }
    this.setState ({fetchUrl: localfetchUrl});
    fetch (localfetchUrl)
      .then (response => response.text ())
      .then (responseText => {
        /* API사용하지 않고, 직접 Json데이터 사용시 */
        //console.log ('res', responseText);//json(텍스트로변환된) 내용 확인
        let jsonResult = JSON.parse (responseText); //json 형태의 데이터를 파싱
        //console.log ('jsonResult', jsonResult);//json 파싱 확인
        //boardList_storeInfos = jsonResult.storeInfos; //storeInfos 속성도 array 형태로 받아주고,-판매점정보만
        boardList_storeInfos = jsonResult.stores; //storeInfos 속성도 array 형태로 받아주고,-판매점및 재고까지
        if (boardList_storeInfos === null) {
          return false;
        }
        /* boardList_storeInfos = [
          {
            addr: '충청남도 홍성군 갈산면 상촌로 12-1 (두류동)',
            code: '1',
            lat: 36.6029863,
            lng: 126.5489114,
            name: '신신약국',
            type: '01',
            stock_at: '입고시간',
            remain_stat: '재고 상태',
            created_at: '데이터 생성 일자',
          },
        ]; */
        //alert (boardList_storeInfos); //디버그
        /* API사용시 아래 기술 참조
          const match = responseText.match (/\((.*)\)/); // 정규식은 JSONP응답에 따라 달라질 수 있음. 이 경우 ( 응답 )이고 match는 ( ) 를 포함한 전체 응답과 () 내부의 데이터가 배열 형태로 출력됨
          if (match == null) console.log ('Message', 'null');
          console.log ('1', match[0].toString ());
          console.log ('2', match[1].toString ());
          let jsonResult = JSON.parse (match[1].toString ()); // ( ) 를 뗀 진짜 json 형태의 데이터를 파싱하고
          let jusoArray = jsonResult.results.juso; // juso 속성도 array 형태이기 때문에 또 받아주고,
          console.log ('result', jsonResult.results.juso.toString ());
          console.log ('juso', JSON.stringify (jsonResult)); //이건 확인용
          console.log ('real data', jusoArray[0].detBdNmList); // juso 배열의 첫번째 데이터의 detBdNmList 속성 값을 출력해주었다. */
      })
      .then (data => this.setState ({boardList: boardList_storeInfos}))
      .catch (error => {
        console.error (error);
      });
  }
  getBoardViewContent () {
    var i = 0;
    while (i < this.state.boardList.length) {
      var data = this.state.boardList[i];
      if (data.code === this.state.selected_boardView_id) {
        return data;
        //break;
      }
      i = i + 1;
    }
  }
  getBoardView () {
    var _article = null, _content = null;
    if (this.state.mode === 'list') {
      _article = null;
      //this.state.selected_boardView_id = 0;
    } else if (this.state.mode === 'read') {
      _content = this.getBoardViewContent ();
      _article = (
        <BoardView
          name={_content.name}
          addr={_content.addr}
          code={_content.code}
          lat={_content.lat}
          lng={_content.lng}
          type={_content.type}
          stock_at={_content.stock_at}
          remain_stat={_content.remain_stat}
          created_at={_content.created_at}
          onClosePage={function () {
            //this.componentDidMount ();//지도 초기화
            this.setState ({mode: 'list', selected_boardView_id: null});
          }.bind (this)}
        />
      );
    }
    return _article;
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
            onChangePage={function () {
              //alert ('HeaderBanner');//디버그
              this.componentDidMount ();
              this.setState ({mode: 'list', selected_boardView_id: null});
            }.bind (this)}
          />
          {/* <!-- bodytext_area --> */}
          <div className="bodytext_area box_inner">
            <SearchForm
              searchWord={this.state.searchWord}
              onSubmit={function (_searchWord) {
                //검색된 BoradList 내용 출력
                console.log ('_searchWord', _searchWord); //디버그
                if (_searchWord === '') {
                  this.componentDidMount ();
                } else {
                  this.componentDidMount (_searchWord);
                }
                this.setState ({mode: 'list'});
                //화면 리프레시가 않됨-관련함수:shouldComponentUpdate.
              }.bind (this)}
            />
            <Map fetchUrldata={this.state.fetchUrl} />
            {this.getBoardView ()}
            <BoardList
              onChangePage={function (code) {
                //alert ('BoardList');//디버그
                //debugger;크롬 디버거연동
                this.setState ({
                  mode: 'read',
                  selected_boardView_id: code,
                });
              }.bind (this)}
              data={this.state.boardList}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
