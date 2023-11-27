const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => input.length <= 3
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex):'
    }
];

inquirer.prompt(questions).then(answers => {
    let shape;
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'Circle':
            shape = new Circle(answers.shapeColor);
            break;
        case 'Square':
            shape = new Square(answers.shapeColor);
            break;
    }

    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                            ${shape.render()}
                            <text x="150" y="100" fill="${answers.textColor}" font-size="4em" text-anchor="middle" dominant-baseline="middle">${answers.text}</text>
                        </svg>`;

    const filename = 'examples/logo.svg'
    fs.writeFileSync(filename, svgContent);
    console.log('Generated logo.svg');
});
