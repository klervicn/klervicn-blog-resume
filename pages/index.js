import React from 'react';
import Head from 'next/head';
import TitleSection from '../components/TitleSection';
import Section from '../components/Section';
import LineLabel from '../components/LineLabel';
import Line from '../components/Line';
import HeadLabel from '../components/HeadLabel';
import LineContent from '../components/LineContent';
import Tab from '../components/Tab';

const localizedStrings = {
  fr: { buttonText: 'Version Anglaise' },
  en: { buttonText: 'French Version' }
};

export default class Home extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      language: 'fr'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage() {
    if (this.state.language === 'fr') {
      this.setState({
        language: 'en'
      });
    } else {
      this.setState({
        language: 'fr'
      });
    }
  }

  render() {
    return (
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
          <HeadLabel
            language={this.state.language}
            content="personalInformation"
          />
          <Tab>
            <Line>
              <LineLabel language={this.state.language} content="address" />
              <LineContent>6 rue Delouvain 75019 Paris</LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="birthday" />
              <LineContent>16/04/1993</LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="mail" />
              <LineContent>corbel.klervi@gmail.com</LineContent>
            </Line>
            <Line>
              <LineLabel
                language={this.state.language}
                content="driverLicense"
              />
              <LineContent> B / Véhicule </LineContent>
            </Line>
          </Tab>
        </Section>
        <Section>
          <HeadLabel language={this.state.language} content="formation" />
          <Tab>
            <Line>
              <LineLabel language={this.state.language} content="2015" />
              <LineContent caption="Ecole CS2i (Limoges 87) &amp; Gamac Informatique (La Souterraine 23)">
                Première année en Master de Management de Systèmes d'Information en alternance.
              </LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="2014" />
              <LineContent caption="Ecole CS2i (Limoges 87) &amp; Gamac Informatique (La Souterraine 23)">
                Diplôme de Conception de Systèmes d'Information (CSI) Mention Bien en alternance.
              </LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="2013" />
              <LineContent caption="IUT du Limousin (Limoges 87)">
                Diplôme Universitaire de Technologie en Informatique.
              </LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="2011" />
              <LineContent caption="Lycée Raymond Loewy (La Souterraine 23)">
                Baccalauréat Economique et Social Option Maths Mention Bien.
              </LineContent>
            </Line>
          </Tab>
        </Section>
        <Section>
          <HeadLabel language={this.state.language} content="skills" />
          <Tab>
            <Line>
              <LineLabel language={this.state.language} content="english" />
              <LineContent>Courant, techinque : TOEIC 960 points</LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="spanish" />
              <LineContent>Correct</LineContent>
            </Line>
            <Line>
              <LineLabel
                language={this.state.language}
                content="programmingLanguages"
              />
              <LineContent>
                Progress OpenEdge (L4G), .NET, C#, JAVA, SQL
              </LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="os" />
              <LineContent>Windows, UNIX.</LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="ide" />
              <LineContent>Atom, Eclipse, Visual Studio</LineContent>
            </Line>
            <LineLabel language={this.state.language} content="versionning" />
            <LineContent>
              GIT
            </LineContent>
            <Line>
              <LineLabel language={this.state.language} content="servers" />
              <LineContent>Tomcat, WAMP</LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="otherTools" />
              <LineContent>JIRA, HP Quality Center, Suite Office</LineContent>
            </Line>
          </Tab>
        </Section>
        <Section>
          <HeadLabel language={this.state.language} content="xp" />
          <Tab>
            <Line>
              <LineLabel
                language={this.state.language}
                content="sinceJuly2016"
              />
              <LineContent caption="Ubisoft Paris Studio (Montreuil 93)">
                Dev Tester. Exécution de tests sur les fonctionnalités online et coop sur le projet Ghost Recon Wildlands.
              </LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="2015-2016" />
              <LineContent caption="Cognizant Technology Solutions (Grenoble 38)">
                Testeuse logicielle. Assurance qualité, rédaction de stratégies, plans de tests, et exécution sur desktop et mobiles. Gestion et traitement des anomalies Formation de 3 semaines en Inde et en anglais.
              </LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="since2014" />
              <LineContent>
                Auto-entrepreneuse. Animatrice WebTV, création de contenu gaming, couverture d'événements e-sport ou non, shoutcast, gestion de réseaux sociaux, de planning, de communauté et d'équipe.
              </LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="2013-2015" />
              <LineContent caption="Gamac Infomatique (La Souterraine 23)">
                Alternance : Développement en Progress OpenEdge, utilisation de composants .NET, reprise d'un projet de gestion electronique de documents (factures), analyse, conception et développement d'applications de gestion, assistance aux utilisateurs.
              </LineContent>
            </Line>
          </Tab>
        </Section>
        <Section>
          <HeadLabel language={this.state.language} content="other" />
          <Tab>
            <Line>
              <LineLabel language={this.state.language} content="interests" />
              <LineContent>
                Actualités jeux vidéo et nouvelles technologies, retrogaming, musique (covers à la guitare), sport (fitness/danse)
              </LineContent>
            </Line>
            <Line>
              <LineLabel language={this.state.language} content="commitments" />
              <LineContent>
                Responsable partenariats pour le BDE de 3IL (Institut d'Ingénierie Informatique de Limoges) durant l'année 2014-2015
              </LineContent>
            </Line>
          </Tab>
        </Section>
        <button type="button" onClick={this.updateLanguage}>
          {localizedStrings[this.state.language]['buttonText']}
        </button>
      </div>
    );
  }
}
