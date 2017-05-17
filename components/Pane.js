import React from 'react';

//Each individual tab

export default class Pane extends React.PureComponent {
  constructor() {
    super();
  }

  handleClick(e) {
    e.preventDefault();
    //Ajouter la méthode au dessus
  }

  render() {
    return (
      <li style={{ display: 'inline-block' }}>
        <a
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            padding: '10px'
          }}
          href={this.props.url}
          onClick={this.handleClick}
        >
          {this.props.name}
        </a>
      </li>
    );
  }
}
