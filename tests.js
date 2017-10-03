const assert = require('power-assert');
const update = require('./update');

describe('update', () => {
  context('when a type of the second argument is object' , () => {
    const originalObj = { a: 1, b: 2 };
    const newObj = update(originalObj, { a: 3 });

    context('and when its properties overlap the properties in the original object inputed as the first argument' , () => {
      it('should return object', () => {
        assert(typeof newObj === 'object' && newObj !== null);
      });

      it('has properties overwrited by the object provided through the second argument', () => {
        assert.equal(newObj.a, 3);
        assert.equal(newObj.b, 2);
      });

      it('shouldn\'t alter the original object', () => {
        assert.equal(originalObj.a, 1);
        assert.equal(originalObj.b, 2);
      });
    });
  });
});