import React from 'react';
import Head from 'next/head';
import Tabs from '../components/Tabs';
import PaneContent from '../components/PaneContent';
import { nayruColor } from '../styles/colors';

export const tabList = [
  { key: 1, id: 1, name: 'Stream', url: '/stream' },
  { key: 2, id: 2, name: 'Blog', url: '/blog' },
  { key: 3, id: 3, name: 'CV', url: '/resume' }
];

export default class Main extends React.PureComponent {
  render() {
    return (
      <div style={{ minWidth: 800 }}>
        <Head>
          <title>Nayru</title>
        </Head>
        <div
          className="TopBorder"
          style={{
            backgroundColor: nayruColor,
            height: 40,
            margin: '0 auto'
          }}
        >
          <Tabs currentTabId={this.props.currentTabId} tabList={tabList} />
          <PaneContent currentTabId={this.props.currentTabId} />
        </div>
      </div>
    );
  }
}
