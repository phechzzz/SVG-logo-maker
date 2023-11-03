const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

//inquire prompt to ask user what letters, shape and color they want
//take user input and insert it into the text that will create the svg file

function generateSVG(answers){
    let shape;
    if (answers.logoShape == 'Circle'){
        shape = new Circle();
    }
    if (answers.logoShape == 'Square'){
        shape = new Square();
    }
    if (answers.logoShape == 'Triangle'){
        shape = new Triangle();
    }
    shape.setColor(answers.logoColor)
    
    let SVGcontent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    +`${shape.render()}`
    +`<text x="100" y="125" fill="${answers.textColor}" font-size="50" text-anchor="middle">${answers.logoText}</text>
    </svg>`;
    return SVGcontent;
}

function init () {
    const questions = [
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter the characters you want in your logo. Max 3.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword OR hexadecimal number for your text color. '
        },
        {
            type: 'list',
            name: 'logoShape',
            message: 'What shape would you like your logo to be?',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'logoColor',
            message: 'Enter a color keyword OR hexadecimal number for your shape color.'
        }
    ]


inquirer
    .prompt(questions)
    .then((answers) => {
      // Process user answers
      const SVGcontent = generateSVG(answers);
      writeToFile('logo.svg', SVGcontent);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error('Error writing the file:', err);
        } else {
          console.log(`${fileName} has been successfully written.`);
        }
      });
}

const fileName = 'logo.svg';
module.exports = generateSVG;
init();
