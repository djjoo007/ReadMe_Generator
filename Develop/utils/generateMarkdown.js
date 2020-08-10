// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### Description
  ${data.description}
  ### Table Of Contents
  ${data.table}
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  ### License
  ${data.license}
  ### Contributing
  ${data.contributing}
  ### Tests
  ${data.tests}
  ### Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;