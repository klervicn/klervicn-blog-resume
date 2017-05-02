import React from 'react';
import { labelColor } from '../styles/colors';

export default ({ children, picto = {} }) => (
  <label
    style={{
      display: 'table-cell',
      fontSize: 15,
      width: 130,
      paddingTop: 5,
      color: labelColor
    }}
  >
    {children}
  </label>
);
