const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFile = util.promisify(fs.writeFile);

const questions = [
    {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your project name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project: "
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]
  },
  {
    type: "input",
    name: "installDepend",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "testCommand",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "aboutRepo",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "input",
    name: "aboutContributing",
    message: "What does the user need to know about contributing to the repo?"
  }];

function writeToFile(fileName, data) {
    return writeFile(fileName, data);
}

function init() {
    
    inquirer
    .prompt(questions)
    .then(input => {
        axios.all([api.getUser(input), input])
        .then(axios.spread(function (response, input) {
            return generateMarkdown(response.data,input)
        }))
        .then(markdown => writeToFile("./output/README.md", markdown))
        .then(() => console.log("README has been created..."));
    })
    .catch(error => {
        console.log(error)
        process.exit(1);
    });
    
}

init();
