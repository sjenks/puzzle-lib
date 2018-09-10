/* global describe, it */

const assert = require('assert');
const { WordSearchSolver } = require('../');

describe('WordSearchSolver', function () {
  it('Cardnial directions', function () {
    const matrix = [
      [ 'p', 'i', 'o', 't' ],
      [ 'u', 'w', 'i', 'n' ],
      [ 'z', 'b', 'w', 'q' ],
      [ 'z', 'x', 'a', 'm' ]
    ];
    const solver = new WordSearchSolver(matrix);
    // assert.strictEqual(solver.containsWord('puzz'), 1);
    // assert.strictEqual(solver.containsWord('win'), 1);
    assert.strictEqual(solver.containsWord('zzz'), 0);
  });

  it('Diagonal directions', function () {
    const matrix = [
      [ 'c', 'i', 'o', 't', 'q' ],
      [ 'a', 'o', 'a', 'h', '1' ],
      [ 'u', 'b', 'w', 'z', '6' ],
      [ 'q', 'x', 'a', 'm', 'p' ]
    ];
    const solver = new WordSearchSolver(matrix);
    assert.strictEqual(solver.containsWord('cow'), 1);
    assert.strictEqual(solver.containsWord('bat'), 1);
    assert.strictEqual(solver.containsWord('zzz'), 0);
  });

  it('Unlocked Slither', function () {
    const matrix = [
      [ 's', 'a', 'r', 'a', 'a' ],
      [ 'l', 'a', 'e', 'w', 'o' ],
      [ 'i', 't', 'h', 'a', 'r' ],
      [ 'a', 'a', 'a', 'a', 'd' ]
    ];
    const solver = new WordSearchSolver(matrix);
    assert.strictEqual(solver.containsWord('slither'), 1);
    assert.strictEqual(solver.containsWord('word'), 1);
    assert.strictEqual(solver.containsWord('zzz'), 0);
  });
});
