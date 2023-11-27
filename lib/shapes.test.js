const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes render method', () => {
    test('Triangle render method returns correct SVG string', () => {
        const triangle = new Triangle('blue');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('Circle render method returns correct SVG string', () => {
        const circle = new Circle('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    test('Square render method returns correct SVG string', () => {
        const square = new Square('green');
        expect(square.render()).toEqual('<rect x="60" y="20" width="180" height="180" fill="green" />');
    });
});
