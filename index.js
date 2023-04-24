// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?",
    },
// the project description
    {
        type: "input",
        name: "description",
        message: "short description of the challenge?",
    },
    
    {
        type: "input",
        name: "installation",
        message: " what to install?",
    },

    {
        type: "input",
        name: "usage",
        message: "what user want to know about the repo?",
    },

    {
        type: "list",
        name: "license",
        message: "what kind of license this challenge have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },

    {
        type: "input",
        name: "contributing",
        message: "what user want to know about contributing to this repo?",
    },

    {
        type: "input",
        name: "tests",
        message: "what should to test?",
    },

    {
        type: "input",
        name: "list",
        message: "what user want to know about the repo?",
    },

    {
        type: "input",
        name: "username",
        message: "what is your github username?",
    },

    {
        type: "input",
        name: "email",
        message: "what is your email?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err) =>{
     if(err){
     console.log(err);
     }else {
        console.log("success");
     }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data))
     const markDown = generateMarkdown(data);
     writeToFile("README.md", markDown);
    });
}

// Function call to initialize app
init();