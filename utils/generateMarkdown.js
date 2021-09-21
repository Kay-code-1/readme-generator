//Function to get License badge details based on the choice of Licenses by user
// const renderLicenseBadge = (license) => {
//   console.log(license);
//   switch (license) {
//     case "APACHE 2.0":
//       return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

//     case "MIT":
//       return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

//     case "GNU GPL V3":
//       return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

//     case "BSD 3-Clause":
//       return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

//     default:
//       return "";
//   }
// };

//Function to get License link details based on the choice of Licenses by user
// const renderLicenseLink = (license) => {
//   console.log(license);
//   switch (license) {
//     case "APACHE 2.0":
//       return `Apache 2.0 (https://opensource.org/licenses/Apache-2.0)`;

//     case "MIT":
//       return `MIT (https://opensource.org/licenses/MIT)`;

//     case "GNU GPL V3":
//       return `GNU GPL V3 (https://www.gnu.org/licenses/gpl-3.0)`;

//     case "BSD 3-Clause":
//       return `BSD 3-Clause (https://opensource.org/licenses/BSD-3-Clause)`;
//   }
// };

//Function for License details based on the choice of Licenses by user

const renderLicenseSection = (title, license) => {
  if(license !== "None") {
    return `The application ${title} is covered under ${license} https://opensource.org/licenses/${license}.`;
  } else {
    return "This application is not covered under any license.";
  }  
};

// Generate markdown based on user inputs with project details
const generateMarkdown = (data) => {
  console.log(data);
  return `# ${data.projectTitle}

[![License](https://img.shields.io/badge/License-${data.license.replace(' ', '%20')}-blue.svg)](https://opensource.org/licenses/${data.license.replace(' ', '-')})

## Description

${data.projectDesc}

## Technology Stack

${data.techStack}

## Table of contents

[**1. Installation**](#installation)
[**2. Usage**](#usage)
[**3. License**](#license)
[**4. Contributing**](#contributing)
[**5. Tests**](#tests)
[**6. Questions**](#questions)

### Installation

>${data.installation}

### Usage

>${data.usageInfo}

### License

${renderLicenseSection(data.projectTitle, data.license)}

### Contributing

>${data.contributing}

### Tests

>${data.tests}

### Questions

- [GitHub](https://github.com/${data.gitUname})
- Technical Support: Email queries to ${data.email}
`;
};

// export module 
module.exports = generateMarkdown;
