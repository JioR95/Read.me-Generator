// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    if (license == 'GPLv2') {
      return '[![License; ${license}](https://img.shields.io/badge/License-GPL_v2-blue.svg)]';
    } else if (license == 'Apache 2.0') {
      return `[![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-yellowgreen)]`;
    }else if (license == 'MIT') {
      return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow)]`;
    }else if (license == 'No License') {
      return `[![License: ${license}](https://img.shields.io/badge/License-No_License-lightgreen)]`;
    } else {
      return '';
    }
  };

  // TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
   