// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch (license) {
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case "GNU GPL V3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

    case "BSD 3-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

    default:
      return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  switch (license) {
    case "Apache 2.0":
      return `Apache 2.0 (https://opensource.org/licenses/Apache-2.0)`;

    case "MIT":
      return `MIT (https://opensource.org/licenses/MIT)`;

    case "GNU GPL V3":
      return `GNU GPL V3 (https://www.gnu.org/licenses/gpl-3.0)`;

    case "BSD 3-Clause":
      return `BSD 3-Clause (https://opensource.org/licenses/BSD-3-Clause)`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (title, license) => {
  if(license !== "None") {
    return `The application ${title} is covered under ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
  
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  console.log(data);
  return `# ${data.projectTitle}

${renderLicenseBadge(data.license)}

## Description
${data.projectDesc}

## Table of contents

**1. Installation**
>${data.installation}

**2. Usage**
>${data.usageInfo}

**3. License**
${renderLicenseSection(data.projectTitle, data.license)}

**4. Contributing**
>${data.contributing}

**5. Tests**
>${data.tests}

**6. Questions**
  - [GitHub](https://github.com/${data.gitUname})
  - Technical Support: Email queries to ${data.email}
`;
};

module.exports = generateMarkdown;
