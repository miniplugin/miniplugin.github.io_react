import React, {Component} from 'react';
class HeaderBanner extends Component {
  render () {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
export default HeaderBanner;
