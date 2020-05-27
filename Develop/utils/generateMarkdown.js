function generateMarkdown(data) {

  // This is where entire README.md will reference, with title, description, features, etc.
  return `

# ${data.title}
<p> </p>

## Description
${data.description}
<p> </p>

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
<p> ${data.Installation}</p>

## Usage
<p> ${data.usage}</p>

## License
<p>${data.license}</p>

## Contributors
<p>${data.contributing} </p>

## Test 
<p> ${data.tests}</p>

## Questions
<p>${data.questions}</p>

`;
}

module.exports = generateMarkdown;
