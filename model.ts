export class Model {
  items;
  constructor() {
    this.items = [
      new New('The Evolution of Async Javascript: From Callbacks, to Promises, to Async/Await', 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'),
      new New('Game of Life', 'https://thefullsnack.com/posts/game-of-life.html')
    ];
  }
}

export class New {
  title: string;
  url: string;
  constructor(title, url) {
    this.title = title;
    this.url = url;
  }
}
