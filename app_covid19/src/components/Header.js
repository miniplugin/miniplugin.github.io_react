import React, {Component} from 'react';
class Header extends Component {
  //무조건 render()가 호출되는 상황을 방지 false, true
  shouldComponentUpdate (newProps, newState) {
    if (this.props.data === newProps.data) {
      console.log ('Header.js콤포넌트 값 무변경시 리로드 render()방지');
      return false;
    }
    return true;
  }
  render () {
    console.log ('render()안에서 this는 Header.js콤포넌트 모듈 자신을 가리킨다.', this);
    const menuCloseStyle = {padding: '0 10px 0 50px', background: 'none'};
    return (
      <header id="header">
        <div className="header_area box_inner clear">
          <h1><a href="/">리액트 IN 자바스크립트</a></h1>
          <p className="openMOgnb">
            <a href="#LINK">
              <b className="hdd">메뉴열기</b> <span /><span /><span />
            </a>
          </p>
          {/* <!-- header_cont --> */}
          <div className="header_cont">
            <ul className="util clear">
              <li><a href="#LINK">로그인</a></li>
              <li><a href="#LINK">회원가입</a></li>
            </ul>
            <nav>
              <ul className="gnb clear">
                <li>
                  <a href="#LINK" className="openAll1 openAll">
                  공적마스크 판매처 및 재고 현황
                  </a>
                  <div className="gnb_depth gnb_depth2_1">
                    <ul className="submenu_list">
                      <li>
                        <a
                          href="javascript:alert('현재 마스크 요일제가 종료되었습니다.')"
                        >
                        공적마스크 판매처 및 재고 현황
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/miniplugin/miniplugin.github.io/tree/master/app_mask"
                          target="_new"
                        >
                          Git 소스 정보
                        </a>
                      </li>
                    </ul>
                    <p className="closeSubmenu" style={{float: 'right'}}>
                      <a href="#LINK" style={menuCloseStyle}>
                        닫기
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <a href="#LINK" className="openAll2 openAll">코로나19확진자 방문처 조회</a>
                  <div className="gnb_depth gnb_depth2_2">
                    <ul className="submenu_list">
                    <li>
                    <a
                      href="https://miniplugin.github.io/"
                      target="_new"
                    >
                    코로나19확진자 방문처 조회
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/miniplugin/miniplugin.github.io/tree/master/app_covid19"
                      target="_new"
                    >
                    Git 소스 정보
                    </a>
                  </li>
                    </ul>
                    <p className="closeSubmenu" style={{float: 'right'}}>
                      <a href="#LINK" style={menuCloseStyle}>
                        닫기
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
            <p className="closePop"><a href="#LINK">닫기</a></p>
          </div>
          {/* <!-- //header_cont --> */}
        </div>
      </header>
    );
  }
}
export default Header;
