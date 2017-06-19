import React from 'react';

//Table in ResumeTab

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
