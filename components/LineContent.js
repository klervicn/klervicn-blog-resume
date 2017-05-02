import React from 'react';
import { contentSize } from '../styles/sizes';

export default ({ caption, children = {} }) => (
  <div
    style={{
      display: 'table-cell',
      paddingLeft: 30,
      textAlign: 'justify',
      fontSize: contentSize
    }}
  >
    {children}
    <p
      style={{
        display: 'table-cell',
        textAlign: 'justify',
        fontSize: 11,
        fontStyle: 'italic'
      }}
    >
      {caption}
    </p>
  </div>
);
