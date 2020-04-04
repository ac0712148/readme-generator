// TODO: import fs, path and inquirer modules
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFile = util.promisify(fs.writeFile);

const questions = [
    {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
//   },
//   {
//     type: "input",
//     name: "projectTitle",
//     message: "What is your project title?"
//   },
//   {
//     type: "input",
//     name: "description",
//     message: "Please write a short description of your project: "
//   },
//   {
//     type: "input",
//     name: "projectTitle",
//     message: "What is your project title?"
//   },
//   {
//     type: "list",
//     name: "license",
//     message: "What kind of license should your project have?",
//     choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]
//   },
//   {
//     type: "input",
//     name: "installDepend",
//     message: "What command should be run to install dependencies?",
//     default: "npm i"
//   },
//   {
//     type: "input",
//     name: "testCommand",
//     message: "What command should be run to run tests?",
//     default: "npm test"
//   },
//   {
//     type: "input",
//     name: "aboutRepo",
//     message: "What does the user need to know about using the repo?"
//   },
//   {
//     type: "input",
//     name: "aboutContributing",
//     message: "What does the user need to know about contributing to the repo?"
  }];

function writeToFile(fileName, data) {
    writeFile("readme.md", markdown);
}

function init() {
    inquirer
    .prompt(questions)
    .then(answers => api.getUser(answers.username))
    .then(response => generateMarkdown(response.data))
    .then(markdown => writeFile("./output/README.md", markdown))
    .then(() => console.log("README has been created..."))
    .catch(error => {
        console.log(error)
        process.exit(1);
    });
    
}

init();
