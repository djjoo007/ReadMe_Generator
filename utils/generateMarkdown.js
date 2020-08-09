// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### description
  ${data.description}
  ### tableOfContents
  ${data.table}
  ### installation
  ${data.installation}
  ### usage
  ${data.usage}
`;
}

module.exports = generateMarkdown;
