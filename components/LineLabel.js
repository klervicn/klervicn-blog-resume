import React from 'react';
import { labelColor } from '../styles/colors';

const localizedStrings = {
  fr: {
    address: 'Adresse',
    birthday: 'Date de naissance',
    mail: 'Mail',
    driverLicense: 'Permis',
    '2015': '2015',
    '2014': '2014',
    '2013': '2013',
    '2011': '2011',
    english: 'Anglais',
    spanish: 'Espagnol',
    programmingLanguages: 'Langages',
    os: 'Systèmes',
    ide: 'IDE',
    versionning: 'Versionning',
    servers: 'Serveurs',
    otherTools: 'Autres Outils',
    sinceJuly2016: 'Depuis Juillet 2016',
    '2015-2016': '2015-2016',
    since2014: 'Depuis 2014',
    '2013-2015': '2013-2015',
    interests: 'Interêts',
    commitments: 'Engagements'
  },
  en: {
    address: 'Address',
    birthday: 'Birthday',
    mail: 'Mail',
    driverLicense: 'Driver license',
    '2015': '2015',
    '2014': '2014',
    '2013': '2013',
    '2011': '2011',
    english: 'English',
    spanish: 'Spanish',
    programmingLanguages: 'Languages',
    os: 'Systems',
    ide: 'IDE',
    versionning: 'Versionning',
    servers: 'Servers',
    otherTools: 'Other Tools',
    sinceJuly2016: 'Since 2016 July',
    '2015-2016': '2015-2016',
    since2014: 'Since 2014',
    '2013-2015': '2013-2015',
    interests: 'Interests',
    commitments: 'Commitments'
  }
};
export default ({ children, picto, language, content = {} }) => (
  <label
    style={{
      display: 'table-cell',
      fontSize: 15,
      width: 130,
      paddingTop: 5,
      color: labelColor
    }}
  >
    {localizedStrings[language][content]}
  </label>
);
