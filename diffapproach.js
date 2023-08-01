/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Please enter the link: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // console.log(answers);
    console.log(answers.URL);
    makeQR(answers.URL);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

function makeQR(urlString) {
  var qr_string = qr.image(`${urlString}`);
  qr_string.pipe(fs.createWriteStream(`qr.png`));
}
