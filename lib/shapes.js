class Shape {
    constructor(){
        this.color = ''
    }
    setColor(color){
        this.color = (color);
    }
}

class Circle extends Shape{
    render(){
        return `<>`
    }
}

class Square extends Shape{
    render(){
        return `<>`
    }
}

class Triangle extends Shape{
    render(){
        return `<>`
    }
};

module.exports = {Circle, Square, Triangle}

