import React from 'react';
import commonmark from 'commonmark';
import ReactMarkdown from 'react-markdown';

export default class BlogTab extends React.PureComponent {
  constructor() {
    super();

    this.updateInputValue = this.updateInputValue.bind(this);
    this.displayHtml = this.displayHtml.bind(this);

    this.state = {
      inputValue: ''
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div style={Object.assign({}, this.props.style)}>
        <input
          type="text"
          placeholder="enter text"
          onChange={this.updateInputValue}
        />

        <div>
          <ReactMarkdown source={this.state.inputValue} />
        </div>
      </div>
    );
  }
}
