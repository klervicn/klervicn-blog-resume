import React from 'react';
import Link from 'next/link';

import { labelColor } from '../styles/colors';
import { titlesColor } from '../styles/colors';

export default class Pane extends React.PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }

  render() {
    const fontWeight = this.props.isCurrent ? 'bold' : 'normal';

    return (
      <li style={{ display: 'inline-block' }}>
        <Link href={this.props.url}>
          <a
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              padding: '10px 25px 10px 0px',
              fontFamily: 'Verdana',
              fontSize: 15,
              color: labelColor,
              fontWeight: fontWeight
            }}
            onClick={this.handleClick}
          >
            {this.props.name}
          </a>
        </Link>
      </li>
    );
  }
}
