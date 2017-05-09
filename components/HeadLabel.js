import React from 'react';
import { headLabelColor } from '../styles/colors';
import { headLabelSize } from '../styles/sizes';

const localizedStrings = {
  fr: {
    personalInformation: 'Informations Personnelles',
    formation: 'Formation',
    skills: 'Compétences Techniques',
    xp: 'Expérience Professionnelle',
    other: 'Loisirs et autres activités'
  },
  en: {
    personalInformation: 'Personal Information',
    formation: 'Education',
    skills: 'Technical Skills',
    xp: 'Work Experience',
    other: 'Miscellaneous'
  }
};

export default ({ content, language }) => (
  <div>
    <a name={content} />
    <h2
      style={{
        fontWeight: 'normal',
        borderBottom: '1px solid',
        borderColor: '#bfbfbf',
        textAlign: 'center',
        fontSize: headLabelSize,
        color: headLabelColor
      }}
    >
      {localizedStrings[language][content]}
    </h2>
  </div>
);
