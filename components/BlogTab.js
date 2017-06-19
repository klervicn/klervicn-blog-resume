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
      <div className="Blog" style={Object.assign({}, this.props.style)}>
        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css?family=Courgette|Handlee|Indie+Flower|Kalam|Patrick+Hand+SC|Cinzel|Shadows+Into+Light+Two');
        .Blog h1 { font-family: 'Cinzel';  color: #DA5F5A;}
        .Blog h3 {color: #DA5F5A}
          .Blog { font-family: 'Verdana' ; font-size: 14px; color: #494949}
          .Blog div {margin-right: 20px;  text-align: justify;}
          .Blog a {text-decoration: none; color: #DA5F5A}
l
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
