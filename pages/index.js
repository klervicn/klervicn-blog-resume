import React from "react";
import Head from "next/head";
import { titlesColor } from "../styles/colors";
import Name from "../components/Name";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Head>
            <title>Klervi Corbel</title>
          </Head>
        </div>
        <Name name="Klervi Corbel" />
        <div className="Title">
          <h2>Titre</h2>
        </div>
        <div className="Photo">
          <h2>Photo</h2>
        </div>
        <div className="PersonalInformation">
          <h2>Infos Personnelles</h2>
          <label>Adresse, email, tel, permis, age + pictos</label>
        </div>
        <div className="Languages">
          <h2>Langues</h2>
          <label>Anglais + Espagnol</label>
        </div>
        <div className="Studies">
          <h2>Formation</h2>
        </div>
        <div className="Skills">
          <h2>Compétences Techniques</h2>
          <label>Bon clairement un gros tri à faire</label>
        </div>
        <div className="ProfessionalExperiences">
          <h2>Expériences Professionnelles</h2>
          <label>Tri aussi ici</label>
        </div>
        <div className="Others">
          <h2>Loisirs et autres activités</h2>
        </div>
      </div>
    );
  }
}
