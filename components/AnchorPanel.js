import React from 'react';
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

export default ({ language }) => (
  <div
    style={{
      backgroundColor: '#f26d6d',
      width: '300px',
      height: '200px',
      top: '10px',
      right: '10px',
      position: 'sticky',
      position: 'fixed',
      opacity: 0.25
    }}
  >
    <div>
      <a href="#personalInformation">
        {localizedStrings[language]['#personalInformation']}
      </a>
      <br />
      <a href="#formation">{localizedStrings[language]['#formation']}</a>
      <br />
      <a href="#skills">{localizedStrings[language]['#skills']}</a>
      <br />
      <a href="#xp">{localizedStrings[language]['#xp']}</a>
      <br />
      <a href="#other">{localizedStrings[language]['#other']}</a>

    </div>
  </div>
);
