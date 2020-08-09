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
}, {
    type: 'input',
    name: 'table',
    message: 'Please write the Table of Contents.'
}, {
    type: 'input',
    name: 'installation'
    message: 'Please add the installation instructions.'
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
    console.log("Please wait");
    writeToFile('README.md', generateMarkdown({
        ...answers
    }))
})
}

// function call to initialize program
init();
