// TODO: Include packages needed for this application
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "Enter project title.",
    },
    {
      type: "input",
      name: "projectDesc",
      message: "Enter a brief project description.",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions.",
    },
    {
      type: "input",
      name: "usageInfo",
      message: "Enter usage information.",
    },
    {
      type: "list",
      name: "license",
      message: "Select a license for project.",
      choices: ["MIT", "APACHE 2.0", "GNU GPL V3", "BSD 3-Clause", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contributing guidelines.",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter testing instructions.",
    },
    { //gitHub: 
      type: "input",
      name: "gitUname",
      message: "Enter gitHub username",
    },
    {//email:
        type: "input",
        name: "email",
        message: "Enter email ID for support requests.",
    },
  ]);
};

// TODO: Create a function to initialize app
const init = () => {
  promptQuestions()
    .then((answers) => writeFileAsync("README.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully generated README.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
