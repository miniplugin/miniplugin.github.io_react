import React, {Component} from 'react';
class Header extends Component {
  render () {
    console.log ('render()안에서 this는 Header.js콤포넌트 모듈 자신을 가리킨다.', this);
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
                    리액트정보
                  </a>

                  <div className="gnb_depth gnb_depth2_1">
                    <ul className="submenu_list">
                      <li>
                        <a
                          href="https://github.com/miniplugin/miniplugin.github.io"
                          target="_new"
                        >
                          국내
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/miniplugin/miniplugin.github.io"
                          target="_new"
                        >
                          해외
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#LINK" className="openAll2 openAll">고객센터</a>
                  <div className="gnb_depth gnb_depth2_2">
                    <ul className="submenu_list">
                      <li><a href="#LINK">한줄게시판</a></li>
                      <li><a href="#LINK">문의하기</a></li>
                    </ul>
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
