class Shape {
    constructor(){
        this.color = ''
    }
    setColor(color){
        this.color = (color);
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="50" cy="50" r="100" fill="${answers.logoColor}" />`
    }
}

class Square extends Shape {
    render(){
        return `<rect x="50" y="20" width="200" height="200" fill="${answers.logoColor}"/>`
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon height=100 width=100 points="50,10 10,90 90,90" fill="${answers.logoColor}" />`
    }
}

module.exports = {Circle, Square, Triangle}