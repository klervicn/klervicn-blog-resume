import React from 'react';
import Main, { tabList } from '../components/Main';

export default () => (
  <Main currentTabId={tabList.find(({ name }) => name === 'Resume').id} />
);
