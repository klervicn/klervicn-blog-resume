import React from 'react';

export default ({ children }) => (
  <ul
    style={{
      display: 'table',
      paddingLeft: 0
    }}
  >
    {children}
  </ul>
);
