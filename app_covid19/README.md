### 코로나19확진자 방문처 조회 웹 프로젝트 리액트 기반기술(아래)

---

- 관련무료강좌로 생활코딩의 리액트강좌를 한번 들어보시는 것을 추천드립니다.(아래)
- https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#
- 위 기술을 응용한 깃소스: https://github.com/miniplugin/miniplugin.github.io/tree/master/app_covid19
- 위 기술적용 URL결과: https://miniplugin.github.io/

---

### 20210301 작업내역(2021년 신규작업 아래)

- 작업PC에 신규개발환경 셋팅시 VS code 로 개발환경설치하고, cmd 창에서 아래 내용 추가
- npm 설치 : 노드패키지매니저이기 때문에 노드js를 설치하면 포함됨 https://nodejs.org/
- npm버전확인 : npm -v
- react앱중 create-react-app(이것이 앱이름임) 설치: npm install create-react-app
- create-react-app 버전확인: create-react-app -V
- create-react-app app_covid19 로 covid19앱 생성
- 구글맵라이브러리설치: 작업폴더>npm install react-google-maps //엔터
- 라이브러리 fix메세지 나오면: 작업폴더>npm audit fix //엔터
- 깃에서 강사 자료 받아서, 위 app_covid19폴더 내용을 덮어씀
- PC에서 앱실행: npm run start
- 배포버전 만들기: 작업폴더>npm run build
- 빌드폴더에 내용을 깃허브 레포지토리 루트에 올림.
- 깃허브에 배포확인: https://miniplugin.github.io/
- 깃허브에 배포시 문제없으면 그대로 진행 단, 보안사항때문에 않될때 (아래변경하세요)
- fetch('https://coroname.me/getdata')//깃에서 실시간OK.
- fetch('http://cors-anywhere.herokuapp.com/https://coroname.me/getdata')//로컬에서 실시간
- fetch (this.props.fetchUrldata)//깃 배포시 실시간안됨.

### 코로나19확진자 방문처 조회 웹 프로젝트(아래는 작년2020년에 예전 작업내용 입니다.)

---

- 아직 공공마스크 판매처 처럼 공공데이터 API로 오픈되어 있지 않아서 아래 데이터를 참조하게 됩니다.
- 공공데이터로 [코로나19확진자 방문처] 가 오픈되면, 그 API 자료를 사용할 예정 입니다.
- 참고: 코로나19확진자 방문처 확인 https://coronamap.site/
- 데이터 참조: https://coronamap.site/javascripts/ndata.js
- 아래 데이터(2차원 배열json) 예: 방문날짜에 따른 색상구분 빨강:1일이하, 노랑:2~4일이하, 녹색:3~9일이하
- 파일구조(예정): 신규폴더명 app_covid19 로 create-react-app 앱 생성 후 작업.
- 배포위치: 파스타 클라우드 : npm run build 후 manifest.yml파일을 빌드폴더에 붙여넣고 cf login + cf push
- 주기술참조: https://medium.com/@imranhsayed/google-maps-in-react-autocomplete-location-search-draggable-marker-marker-infobox-565ab8e8cf22
- 부기술참조: https://github.com/googlemap-react/googlemap-react
- CORS 문제처리 정보: https://velog.io/@leejh3224/CORS-Real-examples-8yjnloovl5
- CORS 문제처리 노드js프록시서버 Git소스 https://github.com/Rob--W/cors-anywhere
- 사용된 CORS 문제처리 다른 사람의 노드js프록시서버 URL: http://cors-anywhere.herokuapp.com/

---

### 20200328 작년 작업내역(아래)

- 구글지도에 코로나19확진자 방문처 위치 매칭.
- 구글맵 기술참조: https://github.com/google-map-react/google-map-react //사용함.
- npm install --save google-map-react //사용함.
- 파스타 클라우드에 배포: http://covid19.paas-ta.org/ (파스타 자료 삭제되었음.)
- 검색기능 추가.
