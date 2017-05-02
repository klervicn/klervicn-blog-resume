import React from 'react';

export default ({ caption, children = {} }) => (
  <div
    style={{
      display: 'table-cell',
      paddingLeft: 30,
      textAlign: 'justify',
      fontSize: 13
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
