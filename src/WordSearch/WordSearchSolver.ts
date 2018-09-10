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
          const unused = this.createUnusedMatrix();
          const result = this.startSearch(search, i, j, 0, unused);
          if (result) {
            return 1;
          }
        }
      }
    }
    return 0;
  }

  private startSearch(search: string, i: number, j: number, index: number, used: boolean[][]): boolean {
    if (index >= search.length) {
      return true;
    }
    if (i < 0 || i >= this._matrix.length) {
      return false;
    }
    if (j < 0 || j >= this._matrix[i].length) {
      return false;
    }
    if (this._matrix[i][j] !== search.charAt(index)) {
      return false;
    }
    if (used[i][j]) {
      return false;
    }
    used[i][j] = true;
    // Cardinal directions
    return this.startSearch(search, i + 1, j, index + 1, used) ||
      this.startSearch(search, i - 1, j, index + 1, used) ||
      this.startSearch(search, i, j + 1, index + 1, used) ||
      this.startSearch(search, i, j - 1, index + 1, used) ||
      // Diagonals
      this.startSearch(search, i + 1, j + 1, index + 1, used) ||
      this.startSearch(search, i - 1, j - 1, index + 1, used) ||
      this.startSearch(search, i + 1, j - 1, index + 1, used) ||
      this.startSearch(search, i - 1, j  + 1, index + 1, used);
  }

  private createUnusedMatrix(): boolean[][] {
    const used = new Array();
    for (const row of this._matrix) {
      const arr = new Array();
      for (let col of row) {
        col = col;
        arr.push(false);
      }
      used.push(arr);
    }
    return used;
  }
}

export default WordSearchSolver;
