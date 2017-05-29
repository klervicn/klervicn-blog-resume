import React from 'react';

export default class BlogTab extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return <div style={Object.assign({}, this.props.style)}> <p>Blog</p></div>;
  }
}
