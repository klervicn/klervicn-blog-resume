import React from 'react';
import Head from 'next/head';
import Tabs from '../components/Tabs';
import PaneContent from '../components/PaneContent';

const tabList = [
  { id: 1, name: 'Stream', url: '/stream' },
  { id: 2, name: 'Blog', url: '/blog' },
  { id: 3, name: 'CV', url: '/resume' },
  { id: 4, name: 'Infos', url: '/infos' }
];

/* TopBorder = Couleur thème (il est temps de se bouger le cul et d'aller choper la vraie couleur)
  Header = Le titre, Nayru ? + RS ?
  TabMenu = A mettre en component et à insérer sur tous les écrans, du coup faudra modifier le CV :
    TV : embbed twitch avec dons
    Blog : Articles
    CV : deja faite, youpi.

 */

export default class Main extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      currentTab: 1
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({ currentTab: tab.id });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Nayru</title>
        </Head>
        <div
          className="TopBorder"
          style={{
            backgroundColor: '#f26d6d',
            height: 40,
            margin: '0 auto'
          }}
        >
          <Tabs
            currentTab={this.state.currentTab}
            tabList={tabList}
            changeTab={this.changeTab}
          />
          <PaneContent currentTab={this.state.currentTab} />
        </div>
      </div>
    );
  }
}
