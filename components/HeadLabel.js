import React from 'react';
import { labelColor } from '../styles/colors';
import { headLabelSize } from '../styles/sizes';

export default ({ children }) => (
  <h2
    style={{
      fontWeight: 'normal',
      borderBottom: '1px solid',
      borderColor: '#bfbfbf',
      textAlign: 'center',
      fontSize: headLabelSize,
      color: labelColor
    }}
  >
    {children}
  </h2>
);
