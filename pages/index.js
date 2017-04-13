import React from "react";
import Head from "next/head";
import TitleSection from "../components/TitleSection";
import HeadSection from "../components/HeadSection";
import LineLabel from "../components/LineLabel";
import Line from "../components/Line";
import CaptionLine from "../components/CaptionLine";

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
        <div className="PersonalInformation">
          <HeadSection name="Informations personnelles" />
          <LineLabel label="Adresse" />
          <Line content="6 rue Delouvain 75019 Paris" />
          <CaptionLine caption="Ecole CS2i" />
          <LineLabel label="Mail" />
          <LineLabel label="Age" />
          <LineLabel label="Tel" />
          <LineLabel label="Permis" />
        </div>
        <div className="Studies">
          <HeadSection name="Formation" />
          <LineLabel label="2015" />
          <LineLabel label="2014" />
        </div>
        <div className="Skills">
          <HeadSection name="Compétences techniques" />
          <LineLabel label="Anglais" />
          <LineLabel label="Espagnol" />
          <LineLabel label="Langages" />
          <LineLabel label="Logiciels" />
        </div>
        <div className="ProfessionalExperiences">
          <HeadSection name="Expériences Professionnelles" />
          <LineLabel label="Ubisoft" />
          <LineLabel label="Cognizant" />
          <LineLabel label="Auto-entrepreneur" />
          <LineLabel label="Gamac Informatique" />
        </div>
        <div className="Others">
          <HeadSection name="Loisirs et autres activités" />
          <LineLabel label="Loutres" />
          <LineLabel label="Bernards l'ermite" />
          <LineLabel label="Emeus" />
          <LineLabel label="Sharkyfication" />
        </div>
      </div>
    );
  }
}
