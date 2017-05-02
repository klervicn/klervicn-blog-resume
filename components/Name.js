import React from 'react';
import { titlesColor } from '../styles/colors';

export default ({ name }) => (
  <div>
    <h1 style={{ color: titlesColor }}>{name}</h1>
  </div>
);
