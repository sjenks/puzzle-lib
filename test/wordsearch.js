/* global describe, it */

const assert = require('assert');
const { WordSearchSolver } = require('../');

describe('WordSearchSolver', function () {
  it('Cardnial directions', function () {
    const matrix = [
      [ 'c', 'i', 'o', 't' ],
      [ 'a', 'o', 'a', 'h' ],
      [ 'u', 'b', 'w', 'z' ],
      [ 'q', 'x', 'a', 'm' ]
    ];
    const solver = new WordSearchSolver(matrix);
    assert.strictEqual(solver.containsWord('aoa'), 1);
    assert.strictEqual(solver.containsWord('boi'), 1);
    assert.strictEqual(solver.containsWord('zzz'), 0);
  });

  it('Diagonal directions', function () {
    const matrix = [
      [ 'c', 'i', 'o', 't' ],
      [ 'a', 'o', 'a', 'h' ],
      [ 'u', 'b', 'w', 'z' ],
      [ 'q', 'x', 'a', 'm' ]
    ];
    const solver = new WordSearchSolver(matrix);
    assert.strictEqual(solver.containsWord('cow'), 1);
    assert.strictEqual(solver.containsWord('bat'), 1);
    assert.strictEqual(solver.containsWord('zzz'), 0);
  });
});
