import React, {Component} from 'react';
class Footer extends Component {
  render () {
    console.log ('render()안에서 this는 Footer.js콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <footer>
        <div className="foot_area box_inner">
          <ul className="foot_list clear">
            <li><a href="#LINK">이용약관</a></li>
            <li><a href="#LINK">개인정보취급방침</a></li>
          </ul>
          <h2>리액트</h2>
          <p className="addr">
            리액트 IN 자바스크립트 <span className="gubun">/</span>
            <span className="br_line">
              대표전화 <span className="space0">02-1234-5678</span>
              <span className="gubun">/</span>
              <span className="br_line">
                E-mail :<span className="space0"> kimilguk@knou.ac.kr</span>
              </span>
            </span>
          </p>
          <p className="copy box_inner">
            Copyright(c) 리액트 IN 자바스크립트 all right reserved
          </p>
          <ul className="snslink clear">
            <li><a href="#LINK">blog</a></li>
            <li><a href="#LINK">facebook</a></li>
            <li><a href="#LINK">instargram</a></li>
          </ul>
        </div>

        <h2 className="hdd">빠른 링크 : 전화 문의,카카오톡,오시는 길,꼭대기로</h2>
        <div className="quick_area">
          <ul className="quick_list">
            <li>
              <a href="#LINK">
                <h3>전화 문의</h3>
                <p>010-1234-5678</p>
              </a>
            </li>
            <li>
              <a href="#LINK">
                <h3>카카오톡 <em>상담</em></h3>
                <p>1:1상담</p>
              </a>
            </li>
            <li>
              <a href="#LINK"><h3 className="to_contact">오시는 길</h3></a>
            </li>
          </ul>
          <p className="to_top">
            <a href="#layout0" className="s_point">TOP</a>
          </p>
        </div>

      </footer>
    );
  }
}
export default Footer;
