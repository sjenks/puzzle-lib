import WordSearchPoint from './WordSearchPoint';

class WordSearchResult {
  public word: string;
  public points: WordSearchPoint[];
  constructor(word: string, wordPoints: WordSearchPoint[]) {
    this.word = word;
    this.points = Array();
    wordPoints.forEach((element) => {
      this.points.push(element);
    });
  }
}

export default WordSearchResult;
