import React from 'react';
import { headLabelColor } from '../styles/colors';
import { headLabelSize } from '../styles/sizes';

export default ({ children }) => (
  <h2
    style={{
      fontWeight: 'normal',
      borderBottom: '1px solid',
      borderColor: '#bfbfbf',
      textAlign: 'center',
      fontSize: headLabelSize,
      color: headLabelColor
    }}
  >
    {children}
  </h2>
);
