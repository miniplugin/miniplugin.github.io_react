## React 웹앱 프로젝트

---

- 기술참조: [https://www.inflearn.com/course/react-생활코딩](https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9)
- 개발언어: JSX(페이스북에서 만든 Javascript 문법 확장판) = react-scripts 버전 3.4.0
- 개발환경: VSCode IDE사용, create-react-app 앱사용.(npm run start 실행결과 크롬에서 정상 출력됨. 단, IE브라우저에서는 실행 않됨)
- 실행환경: React(서버:npm install -g serve앱 설치 후 serve -s build 사용. 또는,1회용 서버생성 npx serve -s build )
- 리액트버전: create-react-app --version 3.4.0
- 폴더구조: /app/리액트 한줄게시판 앱 소스.
- 결과확인링크: https://miniplugin.github.io/

---

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
