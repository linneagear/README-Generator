function generateMarkdown(data) {
  // This is where entire README.md will reference, with title, description, features, etc.
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
<p> ${data.install}</p>

## Usage
<p> ${data.usage}</p>

## License
![badge](https://img.shileds.io/badge/${data.license})
(https://img.shields.io/badge/License-${data.license}.svg)](https://shields.io/)

## Contributors
<p>${data.contributing} </p>

## Test 
<p> ${data.tests}</p>
`;
}

module.exports = generateMarkdown;
