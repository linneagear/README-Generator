const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "repo",
        message: "What is the url of your repo?"
      },
      {
        type: "input",
        name: "name",
        message: "What is your project title?"
      },
      {
        type: "input",
        name: "name",
        message: "What is your project description?"
      },
      {
        type: "input",
        name: "install",
        message: "How does a user install your application?"
        // inquirer, fs, axios
      },
      {
        type: "input",
        name: "usage",
        message: "How does a user use your application?"
      },
      {
        type: "input",
        name: "license",
        message: "What license would you like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license, write 'none.'"
      },
      {
        type: "input",
        name: "contributing",
        // have badge of number of contributors
        message: "How many users contributed?"
      },
      {
        type: "input",
        name: "tests",
        message: "Write any tests done here: "
      },
];

function writeToFile(fileName, data) {


}

function init() {

    inquirer
    .prompt([questions])
    .then(function(response) {
      const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  
      axios.get(queryUrl).then(function(res) {
        const repoNames = res.data.map(function(repo) {
          console.log(repo.name);
  
  
        });
      })
  });

}

// util.generateMarkdown()

init();
