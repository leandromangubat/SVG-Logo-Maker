class Shape {
    constructor(){
        this.color = ''
    }
    setColor(color){
        this.color = (color);
    }
}

//HTML property for the Circle shape
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

//HTML property for the Square shape
class Square extends Shape{
    render(){
        return `<rect x="50" y="20" width="200" height="250" fill="${this.color}"/>`
    }
}

//HTML property for the Triangle shape
class Triangle extends Shape{
    render(){
        return `<polygon points="150 0, 300 180, 0 180" fill="${this.color}"/>`
    }
};

module.exports = {Circle, Square, Triangle}

