import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article.model';
import { ArticleService} from '../article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService, private router: Router) { }

  likeThis() {
/*    this.likes++;*/
  }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

}
