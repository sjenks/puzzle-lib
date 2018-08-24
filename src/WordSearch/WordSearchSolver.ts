// https://www.npmjs.com/package/trie-prefix-tree

class WordSearchSolver {
  private _matrix: string[][];

  constructor(matrix: string[][]) {
    this._matrix = matrix;
  }

  public containsWord(search: string) {
    for (let i = 0; i < this._matrix.length; i++) {
      for (let j = 0; j < this._matrix[0].length; j++) {
          if (this._matrix[i][j] === search.charAt(0)) {
              const result = this.startSearch(search, i, j, 0);
              if (result) {
                  return 1;
              }
          }
      }
    }
    return 0;
  }

  private startSearch(search: string, i: number, j: number, index: number): boolean {
    if (index >= search.length) {
        return true;
    }
    if (i < 0 || i >= this._matrix.length) {
        return false;
    }
    if (j < 0 || j >= this._matrix[0].length) {
        return false;
    }
    if (this._matrix[i][j] !== search.charAt(index)) {
        return false;
    }

    // Cardinal directions
    return this.startSearch(search, i + 1, j, index + 1) ||
        this.startSearch(search, i - 1, j, index + 1) ||
        this.startSearch(search, i, j + 1, index + 1) ||
        this.startSearch(search, i, j - 1, index + 1) ||
        // Diagonals
        this.startSearch(search, i + 1, j + 1, index + 1) ||
        this.startSearch(search, i - 1, j - 1, index + 1) ||
        this.startSearch(search, i + 1, j - 1, index + 1) ||
        this.startSearch(search, i - 1, j  + 1, index + 1);
  }
}

export default WordSearchSolver;
