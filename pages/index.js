import React from "react";
import Head from "next/head";
import TitleSection from "../components/TitleSection";
import HeadSection from "../components/HeadSection";
import LineLabel from "../components/LineLabel";
import Line from "../components/Line";
import CaptionLine from "../components/CaptionLine";
import HeadLabel from "../components/HeadLabel";

/*
             */

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Head>
            <title>Klervi Corbel</title>
          </Head>
        </div>
        <div>
          <TitleSection />
        </div>
        <HeadSection>
          <HeadLabel>Informations personnelles</HeadLabel>
          <LineLabel>Adresse</LineLabel>
          <Line>6 rue Delouvain 75019 Paris</Line>
          <LineLabel>Mail</LineLabel>
          <LineLabel>Age</LineLabel>
          <LineLabel>Tel</LineLabel>
          <LineLabel>Permis</LineLabel>
        </HeadSection>
        <HeadSection>
          <HeadLabel>Formation</HeadLabel>
          <LineLabel>2015</LineLabel>
          <CaptionLine>Ecole CS2i</CaptionLine>
          <LineLabel>2014</LineLabel>
        </HeadSection>
        <HeadSection>
          <HeadLabel>Compétences techniques</HeadLabel>
          <LineLabel>Anglais</LineLabel>
          <LineLabel>Espagnol</LineLabel>
          <LineLabel>Langages</LineLabel>
          <LineLabel>Logiciels</LineLabel>
        </HeadSection>
        <HeadSection>
          <HeadLabel>Expériences Professionnelles</HeadLabel>
          <LineLabel>Ubisoft</LineLabel>
          <LineLabel>Cognizant</LineLabel>
          <LineLabel>Auto-entrepreneur</LineLabel>
          <LineLabel>Gamac Informatique</LineLabel>
        </HeadSection>
        <HeadSection>
          <HeadLabel>Loisirs et autres activités</HeadLabel>
          <LineLabel>Loutres</LineLabel>
          <LineLabel>Bernards l'ermite</LineLabel>
          <LineLabel>Emeus</LineLabel>
          <LineLabel>Sharkyfication</LineLabel>
        </HeadSection>
      </div>
    );
  }
}
