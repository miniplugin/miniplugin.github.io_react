## React 웹앱 프로젝트

---

- 기술참조: [https://www.inflearn.com/course/react-생활코딩](https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9)
- 개발언어: JSX(페이스북에서 만든 Javascript 문법 확장판) = react-scripts 버전 3.4.0
- 개발환경: VSCode IDE사용, create-react-app 앱사용.(npm run start 실행결과 크롬에서 정상 출력됨. 단, IE브라우저에서는 실행 않됨)
- 실행환경: React(서버:npm install -g serve앱 설치 후 serve -s build 사용. 또는,1회용 서버생성 npx serve -s build )
- 리액트버전: create-react-app --version 3.4.0
- 폴더구조: /app/리액트 One페이지 게시판 앱 소스.
- 폴더구조: /app_mask/리액트 공적마스크 판매처 및 재고 현황 조회 앱 소스.(마스크가 많아져서 사용하지 않음)
- app_covid19 결과확인링크: https://kimilguk.github.io/
- 폴더구조: /app_covid19/리액트 코로나19확진자 방문처 조회 앱 소스.
- app_covid19 파스타 클라우드 결과확인링크: http://covid19.paas-ta.org/ (단, 신청 후 2주만 운영됩니다.)

---

### 20200323 작업내역(아래)

- 공적마스크 판매처 및 재고 현황 조회 판매처별 확대 지도 팝업레이어로 구현 OK.
- 지도 드래그시 동적으로 마스크판매처 나타내기 구현 OK.
- 기술참조: https://codepen.io/bastianalbers/pen/PWBYvz

### 20200322 작업내역(아래)

- 공적마스크 판매처 및 재고 현황 조회 구글지도링크연동 사용자 편의성 추가작업 OK.
- 구글맵 기술참조: https://gist.github.com/jwo/43b382fc60eb09d3a415c9953f4057f8 //사용함.
- npm install --save react-google-maps //사용함.

### 20200321 작업내역(아래)

- 공적마스크 판매처 및 재고 현황 조회 구글지도링크연동 작업OK.
- 구글맵 기술참조: https://github.com/google-map-react/google-map-react //사용함.
- npm install --save google-map-react //사용함.

### 20200320 작업내역(아래)

- 공적마스크 판매처 및 재고 현황 조회 검색기능 추가 작업OK.
- 작업예정: 지도링크연동예정.

### 20200318 작업내역(아래)

- 공적마스크 판매처 및 재고 현황 조회 리스트 작업OK.
- 작업예정: 검색기능 추가 및 지도링크연동예정.

### 20200318 작업내역(아래)

- Create마무리 및 immutable(원본불변) 데이터적용 처리.
- Update, Delete 데이터 처리.
- 다음작업예정: 공공데이터(마스크판매약국정보)를 리액트 리스트로 출력하기
- 1-마스크공공데이터json소스: https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=1
- 2-API정보: https://app.swaggerhub.com/apis/Promptech/public-mask-info/20200307-oas3#
- 3-마스크공공데이터 소스정보: https://www.data.go.kr/dataset/15043025/openapi.do
- 4-API입출력정보: https://app.swaggerhub.com/apis-docs/Promptech/public-mask-info/20200307-oas3#/

### 20200317 작업내역(아래)

- 현재까지 작업결과 퍼블리싱된 디자인으로 적용처리.
- 디자인퍼블리싱: https://miniplugin.github.io/design_publish/
- 리액트JSX코드에 디자인 적용: https://miniplugin.github.io/
- 다음작업: Create 기능 구현.(shouldComponetUpdate~)

### 20200316 작업내역(아래)

- 이벤트함수-state상태데이터-props속성-render함수의 관계처리.
- 다음작업: Create 기능 구현.

### 20200315 작업내역(아래)

- 콤포넌트 props 하드코딩.
- 디자인 퍼블리싱 결과 확인: https://miniplugin.github.io/design_publish/
- constructor (props) 부모클래스의 초기화한 값을 JSX사용자 태그의 속성(props)에 this값으로 전달.
- 다음작업 예정: 이벤트.

### 20200314 작업내역(아래)

- create-react-app 앱을 사용해서 개발환경 구축.
- Hello React!! 웹페이지 출력.
- 콤포넌트 만들기 및 props 속성사용.
- 콤포넌트 파일로 분리하기.

### 20200313 작업내역(아래)

- 최초생성
- 비주얼스투디오 코드 개발환경에서 깃 사용.
- VSCode settings.json파일에 "git.autofetch": false 추가해서 보안강화 테스트.
- git config --global credential.helper "" 로 지정.
