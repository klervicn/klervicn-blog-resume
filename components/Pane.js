import React from 'react';
import { labelColor } from '../styles/colors';
import { titlesColor } from '../styles/colors';

//Each individual tab

export default class Pane extends React.PureComponent {
  constructor() {
    super();

    this.state = { hover: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = { color: titlesColor };
    } else {
      linkStyle = { color: labelColor };
    }
    return (
      <li style={{ display: 'inline-block' }}>
        <a
          style={Object.assign(
            {
              display: 'inline-block',
              textDecoration: 'none',
              padding: '10px',
              fontFamily: 'Verdana',
              fontSize: 14
            },
            linkStyle
          )}
          href={this.props.url}
          onClick={this.handleClick}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          {this.props.name}
        </a>
      </li>
    );
  }
}
