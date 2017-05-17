import React from 'react';
import Head from 'next/head';
import Tabs from '../components/Tabs';

/* TopBorder = Couleur thème (il est temps de se bouger le cul et d'aller choper la vraie couleur)
  Header = Le titre, Nayru ? + RS ?
  TabMenu = A mettre en component et à insérer sur tous les écrans, du coup faudra modifier le CV :
    TV : embbed twitch avec dons
    Blog : Articles
    CV : deja faite, youpi.

 */

export default () => (
  <div>
    <Head>
      <title>Nayru</title>
    </Head>
    <div
      className="TopBorder"
      style={{
        backgroundColor: '#f26d6d',
        height: 30,
        margin: '0 auto'
      }}
    />
    <div className="Header">
      Nayru
    </div>
    <div className="TabMenu" />
    <Tabs />
  </div>
);
