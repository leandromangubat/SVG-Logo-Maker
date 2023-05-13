const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require(".lib/shapes");

class Svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg>${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
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
        message: "Please enter the text color",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Please choose a shape",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape",
        message: "Please enter the shape color",
    },
]