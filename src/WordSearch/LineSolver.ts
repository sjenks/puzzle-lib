import WordSearchPoint from './WordSearchPoint';
import WordSearchResult from './WordSearchResult';

class LineSolver {
  private _matrix: string[][];
  private _directions: any;
  private _trie: trie-prefix-tree;

  constructor(matrix: string[][]) {
    this._matrix = matrix;

    this._directions = {
      Down: [0, -1],
      Left: [-1, 0],
      Right: [1, 0],
      Up: [0, 1],
    };
  }

  public findWords(words: string[]): WordSearchResult[] {
    this._trie = new trie([]);
    for (const word of words) {
      this._trie.addWord(word);
    }
    return this.search();
  }

  private search(): WordSearchResult[] {
    const results: WordSearchResult[] = Array();
    for (let i = 0; i < this._matrix.length; i++) {
      for (let j = 0; j < this._matrix[0].length; j++) {
        const pointResults = this.startSearch(new WordSearchPoint(i, j));
        results.concat(pointResults);
      }
    }
    return results;
  }

  private startSearch(start: WordSearchPoint): WordSearchResult[] {
    const results: WordSearchResult[] = Array();
    for (const direction of this._directions) {
      results.concat(this.checkDirection(start, direction));
    }
    return results;
  }

  private checkDirection(start: WordSearchPoint, direction: number[]): WordSearchResult[] {
    const results: WordSearchResult[] = Array();

    // Working set
    let currentPoint = start;
    let currentString = '';
    const pointHistory = Array();
    while (this.isInBounds(currentPoint)) {
      currentString = currentString + this._matrix[currentPoint.i][currentPoint.j];

      // No point in going on, we've run out of possibilities
      if (!this._trie.isPrefix(currentString)) {
        break;
      }

      // Is the exact word in the trie?  Save it.
      const wordsWithPrefix = this._trie.hasWord(currentString);
      if (wordsWithPrefix) {
        const result = new WordSearchResult(currentString, pointHistory);
        results.push(result);
      }

      pointHistory.push(new WordSearchPoint(currentPoint.i, currentPoint.j));
      const next = new WordSearchPoint(currentPoint.i + direction[0], currentPoint.j + direction[1]);
      currentPoint = next;
    }

    return results;
  }

  private isInBounds(point: WordSearchPoint): boolean {
    if (point.i < 0 || point.i >= this._matrix.length) {
      return false;
    }
    if (point.j < 0 || point.j >= this._matrix[point.i].length) {
      return false;
    }
    return true;
  }
}

export default LineSolver;
