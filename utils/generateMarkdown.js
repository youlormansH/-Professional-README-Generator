// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `![GitHub](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
}
 
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## table of contents
  *[Installation](#Installation)

  *[usage](#usage)

  *[License](#licence)

  *[Contributing](#Contributing)

  *[Tests](#Tests)

  *[Questions](#questions)


  ## installation
  ${data.installation}

  ## usage
  ${data.usage}

  ## contributing
  ${data.contributing}

  ## Tests
  ${data.Tests}


  ## questions
  If you have any questions or need further assistance,
   please contact me at ${data.email}. 
   You can also check out my GitHub profile
    at https://github.com/${data.username}.

  ## License
This project is licensed under the ${data.license} license.
`;

}

module.exports = generateMarkdown;
