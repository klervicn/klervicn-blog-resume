import React from 'react';
import BlogPost from '../components/BlogPost';

import posts from '../blog/posts';

export default class BlogTab extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={Object.assign({}, this.props.style)}>
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
