const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')
const fs = require('fs')

const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address? (Required)',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Type your Github username! (Required)',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type description of your project!(Required)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Type information about usage!(Required)',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select the type of license:',
        choices: ['GPLv2', 'Apache 2.0', 'MIT', 'No License', 'Skip']
    },
    {
        type: 'input',
        name: 'contributor',
        message: ' Can add a contributor if any?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Was testing provided for your project?',
        default: 'npm test',
    }
];