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
    name: 'installation',
    message: 'Please add installation instructions here.'
}, {
    type: 'input',
    name: 'usage',
    message: 'Please add the usage information here.'
},
];

// function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function to initialize program
function init() {
inquirer.prompt(questions)
.then(answers =>{
    console.log("Please wait the file is being generated.");
    writeToFile('README.md', generateMarkdown({
        ...answers
    }))
})
}

// function call to initialize program
init();
