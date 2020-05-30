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
![License](https://img.shields.io/badge/license-${data.license}-blue)

## Contributors
<p>${data.contributing}</p>

## Test 
<p> ${data.tests}</p>
`
}

module.exports = generateMarkdown;
