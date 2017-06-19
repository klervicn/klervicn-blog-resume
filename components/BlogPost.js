import React from 'react';
import ReactMarkdown from 'react-markdown';

//Display of one post

export default class BlogPost extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div key={this.props.key}>
        <h1>{this.props.title}</h1>
        <ReactMarkdown source={this.props.body} />
        <p style={{ textAlign: 'right', fontStyle: 'italic' }}>
          {this.props.date.getDate() +
            '/' +
            this.props.date.getMonth() +
            '/' +
            this.props.date.getFullYear()}
        </p>
      </div>
    );
  }
}
