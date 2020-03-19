## React 공적마스크 판매처 및 재고 현황 조회 프로젝트

---

- 개발언어: JSX(페이스북에서 만든 Javascript 문법 확장판) = react-scripts 버전 3.4.0
- 개발환경: VSCode IDE사용, create-react-app 앱사용.(npm run start 실행결과 크롬에서 정상 출력됨. 단, IE브라우저에서는 실행 않됨)
- 실행환경: React(서버:npm install -g serve앱 설치 후 serve -s build 사용. 또는,1회용 서버생성 npx serve -s build )
- 리액트버전: create-react-app --version 3.4.0
- 1-API URL(기본값:위도36.818754,경도127.153618): https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=36.818754&lng=127.153618
- API URL(기본값:충청남도 천안시 신부동): https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%8F%99%EB%82%A8%EA%B5%AC%20%EC%8B%A0%EB%B6%80%EB%8F%99
- 2-API정보: https://app.swaggerhub.com/apis/Promptech/public-mask-info/20200307-oas3#
- 3-마스크공공데이터 소스정보: https://www.data.go.kr/dataset/15043025/openapi.do
- 4-API입출력정보: https://app.swaggerhub.com/apis-docs/Promptech/public-mask-info/20200307-oas3#/
- 5-전국 마스크판매 약국,우체국,농협 정보(판매수량은없음): https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=1
- 결과확인링크: https://miniplugin.github.io/

---

### 20200318 작업내역(아래)

- 공적마스크 판매처 및 재고 현황 조회 리스트 작업OK.
- 작업예정: 검색기능 추가 및 지도링크연동예정.

### 지금 쓰고 있는 전체 vscode 세팅

---

### VSCode에서 설정 > .json으로 검색 > Launch>settings.json에서 편집 클릭 > 아래 내용 붙여 넣기.

```
{
  "workbench.startupEditor": "welcomePage",
  "open-in-browser.default": "chrome",
  "diffEditor.ignoreTrimWhitespace": false,
  "window.zoomLevel": 1,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.fontLigatures": true,
  "editor.snippetSuggestions": "top",
  "workbench.iconTheme": "vscode-icons",
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  // files
  "files.associations": {
    "*.js": "javascriptreact"
  },
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.DS_Store": true,
    "*/node_modules": true,
    "**/.idea": true,
    "**/.vscode": false,
    "**/yarn.lock": true,
    "**/tmp": true,
    "node_modules": true
  },
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/node_modules/**": true,
    "**/tmp": true,
    "**/build": true
  },
  "files.trimTrailingWhitespace": true,
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/.git": true,
    "**/.DS_Store": true,
    "**/tmp": true,
    "**/coverage": true,
    "**/build": true,
    "**/Pods": true,
    "**/*.xcodeproj": true,
    "**/*.xcworkspace": true,
    "**/.meteor": true
  },
  "html.suggest.html5": true,
  "npm-intellisense.scanDevDependencies": false,
  "extensions.autoUpdate": true,
  // flow
  "javascript.validate.enable": false,
  "flow.useNPMPackagedFlow": true,
  // prettier
  "prettier.eslintIntegration": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  "prettier.jsxBracketSameLine": true,
  "prettier.parser": "flow",
  // eslint
  "eslint.autoFixOnSave": true,
  "todohighlight.isEnable": true,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "git.autofetch": false
}

```

### 설치한 extensions 패키지

- Korean Language Pack for Visual Studio Code: VSCode 한글패치.
- React Native Tools: 리액트 네이티브 코드 자동완성, 디버깅, Packager, iOS, Android, Exponent 실행, 재시작 등의 커맨드를 제공한다.
- ESLint: ES ( EcmaScript 표준자바스크립트 ) + Lint ( 에러 코드 표식 )
- GraphQL for VSCode: vscode에서 GraphQL에 대해서 코드 하이라이트를 해준다.
- Flow Language Support: Flow를 사용한다면 필요한 익스텐션. Flow 에러를 vscode의 problems 탭과 코드에 표시해준다.
- Debugger for Chrome: 구글 크롬과 통합된 디버깅 환경을 제공하는 익스텐션.
- IntelliSense for CSS class names: CSS 클래스명 자동 완성 기능.
- React-Native/React/Redux snippets for es6/es7: 리액트, 리액트 네이티브, 리덕스, styled-components의 code snippet.
- Reactjs code snippets: 리액트 code snippet(조각들).
- Prettier: vscode Pretter(코드포멧터) 익스텐션.
- Prettier - ESLint: ESLint와 Prittier를 함께 쓰고 싶다면 필요한 패키지.
- Babel ES6/ES7: vscode 바벨 익스텐션(소스코드 번들링-패키징시 ES6/ES7 표준자바스크립트 문법으로 변환).
- vscode-styled-components: styled-components를 코드 하이라이트를 해준다.
- vscode-icons: 파일확장자 형식에 따른 아이콘표시.
- Auto Rename Tag: HTML/XML, JSX-자바스크립트eXtention의 태그를 수정 할 때, 페어(pair) 태그를 자동으로 수정 해준다.
- Auto Close Tag: 자동으로 HTML/XML, JSX 태그의 close 태그를 만들어준다.
- Rainbow Brackets: bracket-{}마다 다른 컬러를 입혀준다. 중첩으로 bracket-{}이 선언 될 때 헷갈릴 수 있는 문제를 해결해준다.
- Document This: 자동으로 JSDoc 주석을 만들어준다.
- Git History: Git History를 에디터 내에서 그래프 형태로 볼 수 있다.
- npm Intellisense: npm module을 import 할 때 자동완성 기능을 제공한다.
- Path Intellisense: 디렉토리 경로와 파일명 자동 완성 기능 제공
- Project Manager: 여러 프로젝트를 진행 하고 있다면 추천하는 익스텐션. workspace를 프로젝트 별로 관리 할 수 있다.
- TODO Highlight: TODO, FIXME, NOTE 등 주석에 사용되는 단어를 하이라이트 해주고, 리스팅 해준다.
- Advanced New File: path를 통해 파일을 만들 수 있다. path가 존재하지 않는 다면 디렉토리를 만든다. 새로운 파일 생성 할 때 유용하다.
- Bookmarks: 코드 라인에 북마크를 할 수 있고, 커멘드 또는 단축키를 통해 북마크 한 라인으로 바로 이동 할 수 있다.
- Editor Enhancements: 코드내에 공백라인 제거, 선택한 라인의 대/소문자 변환, 정렬, MD암호화 등등 제공.
- OpenAPI(Swagger)Editor: API서버용 스크립트를 생성 및 수정을 편리하게 제공.
- ascii-unicode-escape: 선택영역에서 /u로 시작하는 유니코드를 눈으로 식별할 수 있는 문자로 변환시킴.
- TypeScript Extension Pack: VSCODE에서 Typescript를 사용할 때 필요한 Extension을 모아놓은 것으로, 이거 하나만 설치하면 웬만한 Extension은 추가로 설치하지 않아도 되는 유용한 Extension입니다.
  TSLint, TypeScript Hero, json2ts, Move TS, Path Intellisense, TypeScript Importer, Prettier, Debugger for Chrome이 포함되어 있습니다.
