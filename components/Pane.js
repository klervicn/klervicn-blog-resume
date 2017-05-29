import React from 'react';
import Link from 'next/link';

import { labelColor } from '../styles/colors';
import { titlesColor } from '../styles/colors';

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
        <Link href={this.props.url}>
          <a
            style={Object.assign(
              {
                display: 'inline-block',
                textDecoration: 'none',
                padding: '10px 25px 10px 0px',
                fontFamily: 'Verdana',
                fontSize: 15
              },
              linkStyle
            )}
            onClick={this.handleClick}
          >
            {this.props.name}
          </a>
        </Link>
      </li>
    );
  }
}
