module.exports = function generateMarkdown(data, answers) {
  const { avatar_url, login, email } = data; // using object destructuring

  return `# ${answers.name}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation and Dependencies](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installDepend}
  
  ## Usage
  ${answers.aboutRepo}
  
  ## License
  ${answers.license}
  
  ## Contributing
  ${answers.aboutContributing}
  
  ## Tests
  ${answers.testCommand}
  
  # Questions
  ![${login} avatar](${avatar_url}  =250x250)\n
  Any questions, feel free to email me at: ${email}\n

  More to Come in the future...
`;
}