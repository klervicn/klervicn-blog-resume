import React from 'react';
import commonmark from 'commonmark';

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

  displayHtml() {
    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();
    var parsed = reader.parse(this.state.inputValue);
    var result = writer.render(parsed);
    console.log(result);
  }

  render() {
    return (
      <div style={Object.assign({}, this.props.style)}>
        <input
          type="text"
          placeholder="enter text"
          onChange={this.updateInputValue}
        />
        <button type="button" onClick={this.displayHtml}>
          Transform
        </button>
      </div>
    );
  }
}
