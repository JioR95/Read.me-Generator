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
    