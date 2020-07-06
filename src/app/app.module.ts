import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LikesComponent } from './likes/likes.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ArticleService } from './articles/article.service';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';

const appRoutes: Routes = [
  {path: 'list', component: ListArticlesComponent},
  {path: 'create', component: CreateArticleComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'article/:id', component: ArticleDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LikesComponent,
    NavbarComponent,
    ListArticlesComponent,
    CreateArticleComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
