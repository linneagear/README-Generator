const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

// removed this built in constant:
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
        // inquirer, fs, axios
      },
      {
        type: "input",
        name: "usage",
        message: "How does a user use your application?"
      },
      {
        type: "list",
        name: "license",
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
        // have badge of number of contributors
        message: "How many users contributed?"
      },
      {
        type: "input",
        name: "tests",
        message: "Write any tests done here: "
      }
    ]

inquirer
.prompt([...questions]).then(function() {
    console.log("success");

//   const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//   axios.get(queryUrl).then(function(res) {
//     const repoNames = res.data.map(function(repo) {
//     return repo.name;
  

//       if (err) {
//         return console.log(err);
//       }
  
//       console.log("Success!");
  
//     })
//     })
});

// function writeToFile(fileName, data) {
//     const fileName = "C:\DOCUMENT\BUDGET.XLS"

//     // generateMarkdown()
// }

// function init() {



// }

// init();
