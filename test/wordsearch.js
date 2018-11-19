/* global describe, it */

const assert = require('assert');
const { LineSolver } = require('../');

// describe('WordSearchSolver', function () {
//   it('Cardnial directions', function () {
//     const matrix = [
//       [ 'p', 'i', 'o', 't' ],
//       [ 'u', 'w', 'i', 'n' ],
//       [ 'z', 'b', 'w', 'q' ],
//       [ 'z', 'x', 'a', 'm' ]
//     ];
//     const solver = new WordSearchSolver(matrix);
//     const history = solver.containsWord('puzz').length;
//     assert.strictEqual(history, 4);
//     assert.strictEqual(solver.containsWord('win').length, 3);
//     assert.strictEqual(solver.containsWord('zzz').length, 0);
//   });

//   it('Diagonal directions', function () {
//     const matrix = [
//       [ 'c', 'i', 'o', 't', 'q' ],
//       [ 'q', 'o', 'a', 'h', '1' ],
//       [ 'u', 'b', 'w', 'z', '6' ],
//       [ 'q', 'x', 'a', 'm', 'p' ]
//     ];
//     const solver = new WordSearchSolver(matrix);
//     assert.strictEqual(solver.containsWord('cow').length, 3);
//     assert.strictEqual(solver.containsWord('bat').length, 3);
//     assert.strictEqual(solver.containsWord('zzz').length, 0);
//   });

//   it('Unlocked Slither', function () {
//     const matrix = [
//       [ 's', 'a', 'r', 'a', 'a' ],
//       [ 'l', 'a', 'e', 'w', 'o' ],
//       [ 'i', 't', 'h', 'a', 'r' ],
//       [ 'a', 'a', 'a', 'a', 'd' ]
//     ];
//     const solver = new WordSearchSolver(matrix);
//     // assert.strictEqual(solver.containsWord('slither').length, 7);
//     // assert.strictEqual(solver.containsWord('word').length, 4);
//     assert.strictEqual(solver.containsWord('zzz').length, 0);
//   });
// });

describe('LineSolver', function () {
  it('Cardnial directions', function () {
    const matrix = [
      [ 'p', 'i', 'o', 't' ],
      [ 'u', 'w', 'i', 'n' ],
      [ 'z', 'b', 'w', 'q' ],
      [ 'z', 'x', 'a', 'm' ]
    ];
    const solver = new LineSolver(matrix);
    const results = solver.findWords(['puzz', 'win', 'foo', 'bar', 'baz']);

    assert.strictEqual(results.length, 2);
  });
});
