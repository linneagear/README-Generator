const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");

const genMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is the url of the repo you'd like to append to?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "install",
        message: "How does a user install your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "How does a user use your application?"
    },
    {
        type: "list",
        name: "license",
        // have badge of number for license
        message: "Choose a license for this project:",
        choices: [
            "Apache 2.8",
            "MIT",
            "GPL v3",
            "Mozilla Public 2.0",
            "Boost Software 1.0",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What users contributed? Be sure to enter their urls in http format."
    },
    {
        type: "input",
        name: "tests",
        message: "Write any tests done here: "
    }
]

// console.log("success");
// the above was successful


function writeToFile(data) {
    // want to save the markdown file to the repo
    fs.writeFile("README.md", data, function (err) {
        if (err) {
            throw err;
        }
       console.log('README created');
        })
    // const markdown = utils.generateMarkdown(data)
    // return writeFileAsync("README.md", markdown);

}

function init() {
    return inquirer
        .prompt([...questions])
        // .then(function ({ username, repo }) {

        //     // don't want ALL repos, just the one link. Keeps saying repo is undefined??
        //     const queryUrl = `https://api.github.com/repos/${username}/${repo}`
        //     return axios.get(queryUrl)
        // })
        // .then(function (res) {
        //     // returns README-Generator
        //     const repoName = res.data.name
        // })       
        // .then(function() {
        //     writeToFile()
        // })
        // .catch(function (err) {
        //     console.log(err);
        // });

}

init()
    .then(function(data) {
        return generateMarkdown(data)
    })
    .then(function(data) {
        return writeToFile(data)
    })