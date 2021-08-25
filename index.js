const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Enter project title.',
        },
        {
            type: 'input',
            name: 'projectDesc',
            message: 'Enter a brief project description.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions.',
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Enter usage information.',
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Select a license for project.',
            choices: ['MIT', 'APACHE 2.0', 'GPL'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributing guidelines.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter testing instructions.',
        },
        {
           questions: {
            gitHub:    
            {type: 'input',
               name: 'gitUname',
               message: 'Enter gitHub username',
                },
            email: {
            type: 'input',
            name: 'email',
            message: 'Enter email ID for support requests.',
           },
           } 
        },
    ])

  .then((answers) => {
    const readMe = generateReadme(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });