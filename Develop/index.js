const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Please write the title of the project.'
}, {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of the project.'
}, 
// {
//     type: 'input',
//     name: 'table',
//     message: 'Please write the Table of Contents.'
// }, 
{
    type: 'input',
    name: 'installation',
    message: 'Please add installation instructions here.'
}, {
    type: 'input',
    name: 'usage',
    message: 'Please add the usage information here.'
}, {
    type: 'input',
    name: 'license',
    message: 'Please enter any license information.'
}, {
    type: 'input',
    name: 'contributing',
    message: 'Please enter contributing information here.'
}, {
    type: 'input',
    name: 'tests',
    message: 'Please enter any Test information here.'
}, {
    type: 'input',
    name: 'questions',
    message: 'Please enter any Question here.'
}, {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.'
}, {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.'
}
];

// function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function to initialize program
function init() {
inquirer.prompt(questions)
.then(answers =>{
    console.log("Your README.md file has been generated successfully.");
    writeToFile('README.md', generateMarkdown({
        ...answers
    }));
});
}

// function call to initialize program
init();
