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

const localizedStrings = {
  fr: { buttonText: 'English version' },
  en: { buttonText: 'Version française' }
};
export default class ResumeTab extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      language: 'fr'
    };

    this.switchLanguage = this.switchLanguage.bind(this);
  }

  switchLanguage(e) {
    e.preventDefault();
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
    const language = this.state.language;

    return (
      <div style={Object.assign({}, this.props.style)}>
        <Head>
          <title>Klervi Corbel</title>
        </Head>
        <AnchorPanel language={language} />
        <Section>
          <Tab>
            <TitleSection name="Klervi Corbel" title="Dev | Tester | Gamer" />
            <button
              type="button"
              onClick={this.switchLanguage}
              style={{
                color: '#ffffff',
                fontFamily: 'Verdana',
                borderRadius: '4px',
                background: '#f26d6d',
                textDecoration: 'none',
                padding: '5px 20px 5px 20px',
                fontSize: 10,
                width: 130
              }}
            >
              {localizedStrings[this.state.language]['buttonText']}
            </button>
          </Tab>
        </Section>
        <Section>
          <HeadLabel language={language} content="personalInformation" />
          <Tab>
            <Line>
              <LineLabel language={language} content="address" />
              <LineContent language={language} content="address" />
            </Line>
            <Line>
              <LineLabel language={language} content="birthday" />
              <LineContent language={language} content="birthday" />
            </Line>
            <Line>
              <LineLabel language={language} content="mail" />
              <LineContent language={language} content="mail" />
            </Line>
            <Line>
              <LineLabel language={language} content="driverLicense" />
              <LineContent language={language} content="driverLicense" />
            </Line>
          </Tab>
        </Section>
        <Section>
          <HeadLabel language={language} content="formation" />
          <Tab>
            <Line>
              <LineLabel language={language} content="2015" />
              <LineContent language={language} content="2015" caption="2015" />
            </Line>
            <Line>
              <LineLabel language={language} content="2014" />
              <LineContent language={language} content="2014" caption="2014" />
            </Line>
            <Line>
              <LineLabel language={language} content="2013" />
              <LineContent language={language} content="2013" />
            </Line>
            <Line>
              <LineLabel language={language} content="2011" />
              <LineContent language={language} content="2011" caption="2011" />
            </Line>
          </Tab>
        </Section>
        <Section>
          <HeadLabel language={language} content="skills" />
          <Tab>
            <Line>
              <LineLabel language={language} content="english" />
              <LineContent language={language} content="english" />
            </Line>
            <Line>
              <LineLabel language={language} content="spanish" />
              <LineContent language={language} content="spanish" />
            </Line>
            <Line>
              <LineLabel language={language} content="programmingLanguages" />
              <LineContent language={language} content="programmingLanguages" />
            </Line>
            <Line>
              <LineLabel language={language} content="systems" />
              <LineContent language={language} content="systems" />
            </Line>
            <Line>
              <LineLabel language={language} content="ide" />
              <LineContent language={language} content="ide" />
            </Line>
            <LineLabel language={language} content="versionning" />
            <LineContent language={language} content="versionning" />
            <Line>
              <LineLabel language={language} content="servers" />
              <LineContent language={language} content="servers" />
            </Line>
            <Line>
              <LineLabel language={language} content="otherTools" />
              <LineContent language={language} content="otherTools" />
            </Line>
          </Tab>
        </Section>
        <Section>
          <HeadLabel language={language} content="xp" />
          <Tab>
            <Line>
              <LineLabel language={language} content="sinceJuly2016" />
              <LineContent
                language={language}
                content="sinceJuly2016"
                caption="sinceJuly2016"
              />
            </Line>
            <Line>
              <LineLabel language={language} content="2015-2016" />
              <LineContent
                language={language}
                content="2015-2016"
                caption="2015-2016"
              />
            </Line>
            <Line>
              <LineLabel language={language} content="since2014" />
              <LineContent language={language} content="since2014" />
            </Line>
            <Line>
              <LineLabel language={language} content="2013-2015" />
              <LineContent
                language={language}
                content="2013-2015"
                caption="2013-2015"
              />
            </Line>
          </Tab>
        </Section>
        <Section>
          <HeadLabel language={language} content="other" />
          <Tab>
            <Line>
              <LineLabel language={language} content="interests" />
              <LineContent language={language} content="interests" />
            </Line>
            <Line>
              <LineLabel language={language} content="commitments" />
              <LineContent language={language} content="commitments" />
            </Line>
          </Tab>
        </Section>

      </div>
    );
  }
}
