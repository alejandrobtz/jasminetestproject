const it = require('./framework').it;
const expect = require('./framework').expect;
const greet = require('./app')



it('The Greet function', () => {
    expect(greet('Alejo')).toBe('Hello Alejo');
})