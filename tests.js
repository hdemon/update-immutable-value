const assert = require('power-assert');
const update = require('./update');

describe('update', () => {
  context('when both types of the arguments are same' , () => {
    context('and these types are primitive' , () => {
      it('should return a new value', () => {
        assert.equal(update(1, 2), 2);
        assert.equal(update('a', 'b'), 'b');
        // assert.equal(update([1], [1, 2]), [1, 2]);
      });
    });

    context('and these types are object' , () => {
      context('and when its properties overlap the original object\'s properties inputed as the first argument' , () => {
        const originalObj = { a: 1, b: 2 };
        const newObj = update(originalObj, { a: 3 });

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
  
      context('and when its properties overlap the original object\'s properties inputed as the first argument' , () => {
        const originalObj = { foo: { number: 1 }, bar: { number: 2 } };
        const newObj = update(originalObj, { bar: { number: 3 } });

        it('should return a new object which properties are updated', () => {
          assert.equal(newObj.foo.number, 1);
          assert.equal(newObj.bar.number, 3);
        });

        specify('the properties its values are same as the original should refer the same object as the original', () => {
          assert(newObj.foo === originalObj.foo);
        });
      });
    });
  });

  context('when a type of the second argument is object' , () => {
  });
});