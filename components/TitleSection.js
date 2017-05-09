import React from 'react';
import Head from 'next/head';
import Name from '../components/Name';
import AnchorPanel from '../components/AnchorPanel';
import { labelColor } from '../styles/colors';

export default ({ title, name = {} }) => (
  <div>
    <AnchorPanel />
    <div style={{ display: 'table-cell' }}>
      <img
        style={{
          height: 128
        }}
        src="../static/picture.png"
      />
    </div>

    <div
      style={{
        display: 'table-cell',
        verticalAlign: 'top',
        paddingLeft: 10
      }}
    >
      <Name style={{}} name={name} />

      <h2 style={{ color: labelColor }}>
        {title}
      </h2>

    </div>
  </div>
);
