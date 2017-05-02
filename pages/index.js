import React from 'react';
import Head from 'next/head';
import TitleSection from '../components/TitleSection';
import Section from '../components/Section';
import LineLabel from '../components/LineLabel';
import Line from '../components/Line';
import HeadLabel from '../components/HeadLabel';
import LineContent from '../components/LineContent';
import Tab from '../components/Tab';

export default () => (
  <div>
    <Head>
      <title>Klervi Corbel</title>
    </Head>
    <Section>
      <Tab>
        <TitleSection name="Klervi Corbel" title="Dev Tester" />
      </Tab>
    </Section>
    <Section>
      <HeadLabel>Informations personnelles</HeadLabel>
      <Tab>
        <Line>
          <LineLabel>Adresse</LineLabel>
          <LineContent>6 rue Delouvain 75019 Paris</LineContent>
        </Line>
        <Line>
          <LineLabel>Date de naissance</LineLabel>
          <LineContent>16/04/1993</LineContent>
        </Line>
        <Line>
          <LineLabel>Mail</LineLabel>
          <LineContent>corbel.klervi@gmail.com</LineContent>
        </Line>
        <Line>
          <LineLabel>Permis</LineLabel>
          <LineContent> B / Véhicule </LineContent>
        </Line>
      </Tab>
    </Section>
    <Section>
      <HeadLabel>Formation</HeadLabel>
      <Tab>
        <Line>
          <LineLabel>2015</LineLabel>
          <LineContent caption="Ecole CS2i (Limoges 87) &amp; Gamac Informatique (La Souterraine 23)">
            Première année en Master de Management de Systèmes d'Information
          </LineContent>
        </Line>
        <Line>
          <LineLabel>2014</LineLabel>
          <LineContent caption="Ecole CS2i (Limoges 87) &amp; Gamac Informatique (La Souterraine 23)">
            Diplôme de Conception de Systèmes d'Information (CSI) Mention Bien en alternance
          </LineContent>
        </Line>
        <Line>
          <LineLabel>2013</LineLabel>
          <LineContent caption="IUT du Limousin (Limoges 87)">
            Diplôme Universitaire de Technologie en Informatique
          </LineContent>
        </Line>
        <Line>
          <LineLabel>2011</LineLabel>
          <LineContent caption="Lycée Raymond Loewy (La Souterraine 23)">
            Baccalauréat Economique et Social Option Maths Mention Bien
          </LineContent>
        </Line>
      </Tab>
    </Section>
    <Section>
      <HeadLabel>Compétences techniques</HeadLabel>
      <Tab>
        <Line>
          <LineLabel>Anglais</LineLabel>
          <LineContent>Courant, techinque : TOEIC 960 points</LineContent>
        </Line>
        <Line>
          <LineLabel>Espagnol</LineLabel>
          <LineContent>Correct</LineContent>
        </Line>
        <Line>
          <LineLabel>Langages</LineLabel>
          <LineContent>
            Progress OpenEdge (L4G), Dot.Net, C++, C#, JAVA, SQL
          </LineContent>
        </Line>
        <Line>
          <LineLabel>Systèmes</LineLabel>
          <LineContent>Windows, UNIX.</LineContent>
        </Line>
        <Line>
          <LineLabel>IDE</LineLabel>
          <LineContent>Eclipse, Visual Studio, Atom</LineContent>
        </Line>
        <LineLabel>
          Versionning
        </LineLabel>
        <LineContent>
          GIT
        </LineContent>
        <Line>
          <LineLabel>Serveurs</LineLabel>
          <LineContent>Tomcat, WAMP</LineContent>
        </Line>
        <Line>
          <LineLabel>Autres Outils</LineLabel>
          <LineContent>Suite Office</LineContent>
        </Line>
      </Tab>
    </Section>
    <Section>
      <HeadLabel>Expériences Professionnelles</HeadLabel>
      <Tab>
        <Line>
          <LineLabel>Depuis Juillet 2016</LineLabel>
          <LineContent caption="Ubisoft Paris Studio (Montreuil 93)">
            Dev Tester. Exécution de tests sur les fonctionnalités online et coop de sur le projet Ghost Recon Wildlands
          </LineContent>
        </Line>
        <Line>
          <LineLabel>2015-2016</LineLabel>
          <LineContent caption="Cognizant Technology Solutions (Grenoble 38)">
            Testeuse logicielle. Assurance qualité, rédaction de stratégies, plans de tests, et exécution. Formation de 3 semaines en Inde et en anglais.
          </LineContent>
        </Line>
        <Line>
          <LineLabel>Depuis 2014</LineLabel>
          <LineContent>
            Auto-entrepreneuse. Animatrice WebTV, création de contenu gaming, couverture d'événements e-sport ou non, shoutcast, gestion de réseaux sociaux, de planning, de communauté et d'équipe.
          </LineContent>
        </Line>
        <Line>
          <LineLabel>2013-2015</LineLabel>
          <LineContent caption="Gamac Infomatique (La Souterraine 23)">
            Alternance : Développement en Progress OpenEdge, utilisation de composant Dot.Net, reprise d'un projet de gestion electronique de documents (factures), analyse, conception et développement d'applications de gestion, assistance aux utilisateurs
          </LineContent>
        </Line>
      </Tab>
    </Section>
    <Section>
      <HeadLabel>Loisirs et autres activités</HeadLabel>
      <Tab>
        <Line>
          <LineLabel>Loutres</LineLabel>
        </Line>
        <Line>
          <LineLabel>Bernards l'ermite</LineLabel>
        </Line>
        <Line>
          <LineLabel>Emeus</LineLabel>
        </Line>
        <Line>
          <LineLabel>Sharkyfication</LineLabel>
        </Line>
      </Tab>
    </Section>
  </div>
);
