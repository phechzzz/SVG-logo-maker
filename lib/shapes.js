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
        return `<circle cx="100" cy="100" r="70" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render(){
        return `<rect x="10" y="25" width="200" height="200" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon height=200 width=200 points="0,200 100,0 200,200" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle}