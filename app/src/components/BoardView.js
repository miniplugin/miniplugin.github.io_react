import React, {Component} from 'react';
class BoardView extends Component {
  render () {
    console.log ('render()안에서 this는 콤포넌트 모듈 자신을 가리킨다.', this);
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}
export default BoardView;
