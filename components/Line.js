import React from 'react';

// Display of a line/row in ResumeTab

export default ({ children }) => (
  <li
    style={{
      display: 'table-row'
    }}
  >
    {children}
  </li>
);
