import React from 'react';
import ReactMarkdown from 'react-markdown';

export default class BlogPost extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <h1>{this.props.title}</h1>
        <ReactMarkdown source={this.props.body} />
      </div>
    );
  }
}
