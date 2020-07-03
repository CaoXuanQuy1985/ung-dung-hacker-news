import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AddComponent} from '../add/add.component';
import {Model} from '../../../model';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent{
  model = new Model();
  /*title = 'ung-dung-hacker-news';*/
  /*article = [{
    title: 'The Evolution of Async Javascript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }];*/
  // tslint:disable-next-line:typedef
/*  addArticle(newTitle, newUrl) {
    if (newTitle != null && newUrl != null) {
      this.model.items.push(new New(newTitle, newUrl), false);
    }
  }*/

  constructor() { }
}
