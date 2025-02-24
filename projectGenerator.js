const fs = require('fs/promises');

/*
- An index.js
    - filehandle.writeFile(data, options)

- A spec folder
- An index.test.js
- A package.json set up with the basic dependencies and scripts
- A README.md file
- An eslint config file
- A .gitignore file
- A git repository initialised
*/

async function projectGenerator(projectName, cb) {
  try {
    await fs.mkdir(`./${projectName}`);
    await fs.mkdir(`./${projectName}/spec`);
    await fs.writeFile(`./${projectName}/index.js`, 'Hello world!', 'utf8');
    await fs.writeFile(`./${projectName}/index.test.js`, 'Hello world!', 'utf8');
    await fs.writeFile(`./${projectName}/README.md`, 'Hello world!', 'utf8');
  } catch (error) {
    console.log(error);
  }
}

projectGenerator('my_new_project');

module.exports = projectGenerator;
