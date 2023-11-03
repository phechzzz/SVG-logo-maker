const {Circle, Square, Triangle} = require('./shapes')

describe ("Circle", () => {
test('Circle is rendered correctly', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="100" cy="100" r="70" fill="blue"/>');
    })
    });

describe ("Square", () => {
    test('Square is rendered correctly', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="10" y="25" width="200" height="200" fill="blue"/>');
    })
    });

    describe ("Triangle", () => {
        test('Triangle is rendered correctly', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon height=200 width=200 points="0,200 100,0 200,200" fill="blue"/>');
        })
        });    