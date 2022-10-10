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
    if (license == 'GPLv2') {  
      return '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if (license == 'Apache 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license == 'No License') {
      return `(https://choosealicense.com/no-permission/)`;
    } else {
      return '';
    }
  };

  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
    return `## License
    ---
    ${renderLicenseBadge(license)}
    Distributed under the "${license}" License.
    [Click Here for More Information](${renderLicenseLink(license)})`;
    }

    // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}


## Description
${data.description}

## Table of Contents (Optional)

- [Installation](#installation)

- [Usage](#usage)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data.license)}

## Contibuting
${data.contributing}

## Tests
To run test run the following command: 
${data.test}`;

}

module.exports = generateMarkdown;
  