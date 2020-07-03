import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListArticleComponent} from './list-article/list-article.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
  {path: 'listArticle', component: ListArticleComponent},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
