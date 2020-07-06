import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Article} from '../../models/article.model';
import {ArticleService} from '../article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Article = {
    title: null,
    url: null,
    like: 0
  }

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
  }

  saveArticle(): void {
    this.articleService.save(this.article);
    this.router.navigate(['list']);
  }
}
