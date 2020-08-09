# ReadMe_Generator

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

Your task is to create a command-line application that dynamically generates a professional README.md from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md) as a reminder of everything that a quality, professional README contains. The application will be invoked with the following command:

```
node index.js

Command-Line Application that accepts user input
Will prompt information about application repository
README.md is generated with the following:
    Title
    Description
    Table of Contents
    Installation
    Usage
    License
    Contributing
    Tests
    Questions

    Badge for license is added near  the top of the README and a notice is added to section of the READMe titled License that explains which license the application is covered under.

    Enter GitHub username which is then added to the section of the README titled Questions which is then lined to GitHub profile.

    Enter email address then this is added to the section under Questions with instructions on how to reach the developer with addition questions.

    Links in the Table of Contents will be taken back to the corresponding section of the README.


    .gitignore files include `node_modules/` and `.DS_Store/`
    include `package.json` with required dependencies (run `npm init`)