function generateMarkdown(data) {

  // This is where entire "html" will go, with title, features, etf.
  return `
# ${data.title}

## ${data.description}

## ${data.tableContents}

## ${data.Installation}

## ${data.usage}

## ${data.license}

## ${data.contributing}

## ${data.tests}

## ${data.questions}

`;
}

module.exports = generateMarkdown;
