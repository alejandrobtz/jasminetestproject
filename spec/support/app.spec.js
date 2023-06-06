const greet = require('../../app');

var x = false;

var a = {};
var b = {};


describe('validate variable is true', () => {
    it('The Greet function', () => {
        expect(greet('Alejo')).toContain('Hello Alejo');
    });

    it('X is true', () => {
        expect(x).toBe(false);
        expect(x).toEqual(false);

    });

    it('Same objects', () => {
        expect(a).toEqual(b);
    })
});
