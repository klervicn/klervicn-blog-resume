import React from 'react';
import { lineContentSize } from '../styles/sizes';
import { lineCaptionSize } from '../styles/sizes';

export default ({ caption, children = {} }) => (
  <div
    style={{
      display: 'table-cell',
      paddingLeft: 30,
      textAlign: 'justify',
      fontSize: lineContentSize,
      lineHeight: '1.5em'
    }}
  >
    {children}
    <p
      style={{
        display: 'table-cell',
        fontSize: lineCaptionSize,
        fontStyle: 'italic'
      }}
    >
      {caption}
    </p>
  </div>
);
