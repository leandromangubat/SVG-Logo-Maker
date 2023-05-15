const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
const path = require("path");

//SVG class creator
class Svg {
    constructor(){
        this.textEl = ''
        this.shapeEl = ''
    }
    render(){
        return `<svg  version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    setTextEl(text, color){
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeEl(shape){
        this.shapeEl = shape.render()
    }
}
// Questions prompted for generating the logo
const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to 3 characters",
    },
    {
        type: "input",
        name: "text-color",
        message: "Please enter the text color or hexadecimal number",
    },
    {
        type: "list",
        name: "logo-shape",
        message: "Please choose a shape",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Please enter the shape color",
    },
];

//Function to create file in the "./dist" folder
function writeToFile(fileName, data){
    const filePath = path.join(__dirname, 'dist', fileName);
    console.log("Creating file...")
    fs.writeFile(filePath, data, function(err){
        if(err){
            return console.log(err);
        }
       console.log("Logo sucessfully generated!");
    });
}

//Initiates application
async function init(){
    const answers = await inquirer.prompt(questions);
    var svgStr = '';
    //Generates the file name based on logo details
    var svgFileName = `${answers["shape-color"]}-${answers["logo-shape"]}-logo.svg`;
    var logoText = "";
    //Checks if logo is 3 characters or less
    if(answers.text.length >= 0 && answers.text.length <= 3){
        logoText = answers.text;
    } else{
        console.log("Logo text must be 3 characters or less");
      }
    
    //Variables for logo details
    var textColor = answers["text-color"];
    console.log(`Logo text color: ${textColor}`);
    var shapeColor = answers["shape-color"];
    console.log(`Logo shape color: ${shapeColor}`);
    var logoShape = answers["logo-shape"];
    console.log(`Logo shape: ${logoShape}`);
    
    //Options for shapes
    let shapeSelect;
    if(logoShape == "Square"){
        shapeSelect = new Square();
    } else if(logoShape == "Circle"){
        shapeSelect = new Circle();
      } else if(logoShape == "Triangle"){
          shapeSelect = new Triangle();
        } else{ console.log("Shape is invalid"); }
    shapeSelect.setColor(shapeColor);
    
    //Prompts to create new logo
    var svg = new Svg();
    svg.setTextEl(logoText, textColor);
    svg.setShapeEl(shapeSelect);
    svgStr = svg.render();
    
    //Function to create logo in "./dist" folder with appropriate file name
    writeToFile(svgFileName, svgStr);
}

init();
