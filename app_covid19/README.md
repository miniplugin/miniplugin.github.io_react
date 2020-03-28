## 코로나19확진자 방문처 조회 웹 프로젝트

---

- 아직 공공마스크 판매처 처럼 공공데이터 API로 오픈되어 있지 않아서 아래 데이터를 참조하게 됩니다.
- 공공데이터로 [코로나19확진자 방문처] 가 오픈되면, 그 API 자료를 사용할 예정 입니다.
- 참고: 코로나19확진자 방문처 확인 https://coronamap.site/
- 데이터 참조: https://coronamap.site/javascripts/ndata.js
- 아래 데이터(2차원 배열json) 예: 방문날짜에 따른 색상구분 빨강:1일이하, 노랑:2~4일이하, 녹색:3~9일이하
- 파일구조(예정): 신규폴더명 app_covid19 로 create-react-app 앱 생성 후 작업
- 배포위치: 파스타 클라우드 : 리액트build 후 manifest.yml파일을 빌드폴더에 붙여넣고 cf login + cf push
- 확인URL: http://covid19.paas-ta.org/
- 주기술참조: https://medium.com/@imranhsayed/google-maps-in-react-autocomplete-location-search-draggable-marker-marker-infobox-565ab8e8cf22
- 부기술참조: https://github.com/googlemap-react/googlemap-react

---

### 20200328 작업내역(아래)

- 구글지도에 코로나19확진자 방문처 위치 매칭.
- 구글맵 기술참조: https://github.com/google-map-react/google-map-react //사용함.
- npm install --save google-map-react //사용함.
- 파스타 클라우드에 배포: http://covid19.paas-ta.org/
- 검색기능 추가.
