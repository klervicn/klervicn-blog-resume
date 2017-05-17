import React from 'react';
import Pane from '../components/Pane';

const tabList = [
  { id: 1, name: 'Stream', url: '/stream' },
  { id: 2, name: 'Blog', url: '/blog' },
  { id: 2, name: 'CV', url: '/resume' }
];

//Hold the tab navigation

export default () => (
  <nav>
    <ul>
      {tabList.map(function(tab) {
        return <Pane url={tab.url} name={tab.name} />;
      })}

    </ul>
  </nav>
);
