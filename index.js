const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");

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

function writeToFile(fileName, data){
    console.log("Creating file...")
    fs.writeFile(fileName, data, function(err){
        if(err){
            return console.log(err);
        }
       console.log("Logo sucessfully generated!");
    });
}

