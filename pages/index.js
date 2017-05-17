import React from 'react';
import Head from 'next/head';
import TitleSection from '../components/TitleSection';
import Section from '../components/Section';
import LineLabel from '../components/LineLabel';
import Line from '../components/Line';
import HeadLabel from '../components/HeadLabel';
import LineContent from '../components/LineContent';
import Tab from '../components/Tab';
import AnchorPanel from '../components/AnchorPanel';

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
    <a href="/resume">CV</a>
  </div>
);
