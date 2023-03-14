const { writeFile } = require('fs');

// read environment variables from .env file
require('dotenv').config();


const targetPath = `./src/environments/environment.prod.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
  production: true,
  API_ID: "${process.env.API_ID}"
};
`;

console.log('---process.env---', process.env)

console.log(environmentFileContent);
// write the content to the respective file
// @ts-ignore
writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
      console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
