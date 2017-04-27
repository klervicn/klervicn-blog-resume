import React from "react";
import Head from "next/head";
import TitleSection from "../components/TitleSection";
import Section from "../components/Section";
import LineLabel from "../components/LineLabel";
import Line from "../components/Line";
import CaptionLine from "../components/CaptionLine";
import HeadLabel from "../components/HeadLabel";
import LineContent from "../components/LineContent";
import Tab from "../components/Tab";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Head>
            <title>Klervi Corbel</title>
          </Head>
        </div>
        <Section>
          <TitleSection name="Klervi Corbel" title="Dev Tester" />
        </Section>
        <Section>
          <HeadLabel>Informations personnelles</HeadLabel>
          <Tab>
            <Line>
              <LineLabel>Adresse</LineLabel>
              <LineContent>6 rue Delouvain 75019 Paris</LineContent>
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
              <LineContent
                caption="Ecole CS2i (Limoges 87) &amp; Gamac Informatique (La Souterraine 23)"
              >
                Première année en Master de Management de systèmes d'information informatisés
              </LineContent>
            </Line>
            <Line>
              <LineLabel>2014</LineLabel>
              <LineContent
                caption="Ecole CS2i (Limoges 87) &amp; Gamac Informatique (La Souterraine 23)"
              >
                Diplôme de Conception de systèmes d'information informatisés (CSI) Mention Bien en alternance
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
            </Line>
            <Line>
              <LineLabel>Logiciels</LineLabel>
            </Line>
          </Tab>
        </Section>
        <Section>
          <HeadLabel>Expériences Professionnelles</HeadLabel>
          <Tab>
            <Line>
              <LineLabel>Ubisoft</LineLabel>
            </Line>
            <Line>
              <LineLabel>Cognizant</LineLabel>
            </Line>
            <Line>
              <LineLabel>Auto-entrepreneur</LineLabel>
            </Line>
            <Line>
              <LineLabel>Gamac Informatique</LineLabel>
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
  }
}
