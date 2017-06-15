import React from 'react';
import BlogPost from '../components/BlogPost';
import Head from 'next/head';
import posts from '../blog/posts';

export default class BlogTab extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={Object.assign({}, this.props.style)}>
        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css?family=Courgette|Handlee|Indie+Flower|Kalam|Patrick+Hand+SC|Shadows+Into+Light+Two');
          h1 { font-family: 'Handlee', cursive;  color: #DA5F5A;}
          body { font-family: 'Verdana' ; font-size: 15px; color: #494949}
        `
          }}
        />
        <ul style={{ listStyleType: 'none' }}>
          {posts.map(({ key, title, date, body }) => (
            <li>
              <BlogPost key={key} title={title} date={date} body={body} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
