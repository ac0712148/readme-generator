module.exports = function generateMarkdown(data) {
  const { avatar_url, login } = data; // use object destructuring

  return `# Profile!
![${login} avatar](${avatar_url})
This is the end of ReadMe.....
`;
}