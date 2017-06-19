import React from 'react';
import { labelColor } from '../styles/colors';

// Panel displayed on ResumeTab with shorcuts links.

const localizedStrings = {
  fr: {
    '#personalInformation': 'Informations Personnelles',
    '#formation': 'Formation',
    '#skills': 'Compétences Techniques',
    '#xp': 'Expérience Professionnelle',
    '#other': 'Loisirs et autres activités'
  },
  en: {
    '#personalInformation': 'Personal Information',
    '#formation': 'Education',
    '#skills': 'Technical Skills',
    '#xp': 'Work Experience',
    '#other': 'Miscellaneous'
  }
};

const anchorStyle = {
  textDecoration: 'none',
  color: labelColor,
  fontSize: 14
};

export default ({ language }) => (
  <div
    style={{
      backgroundColor: 'rgba(242, 109, 109, 0.5)',
      borderRadius: '4px',
      width: '250px',
      height: '110px',
      top: '10px',
      right: '10px',
      position: 'sticky',
      position: 'fixed',
      fontFamily: 'Verdana',
      marginTop: 50
    }}
  >
    <div
      style={{
        paddingLeft: 10,
        paddingTop: 5
      }}
    >
      <a href="#personalInformation" style={anchorStyle}>
        {localizedStrings[language]['#personalInformation']}
      </a>
      <br />
      <a href="#formation" style={anchorStyle}>
        {localizedStrings[language]['#formation']}
      </a>
      <br />
      <a href="#skills" style={anchorStyle}>
        {localizedStrings[language]['#skills']}
      </a>
      <br />
      <a href="#xp" style={anchorStyle}>{localizedStrings[language]['#xp']}</a>
      <br />
      <a href="#other" style={anchorStyle}>
        {localizedStrings[language]['#other']}
      </a>

    </div>
  </div>
);
