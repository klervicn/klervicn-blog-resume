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
    formation: 'Formation',
    skills: 'Technical Skills',
    xp: 'Professional Experience',
    other: 'Others'
  }
};

export default ({ content, language = {} }) => (
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
);
