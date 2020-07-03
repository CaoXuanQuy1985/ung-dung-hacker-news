import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LikesComponent } from './likes/likes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListArticleComponent } from './list-article/list-article.component';
import {RouterModule} from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LikesComponent,
    NavbarComponent,
    ListArticleComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
    /*    RouterModule.forChild([
          {path: 'listArticle', component: AppComponent},
          {path: 'addArticle', component: AddComponent}
        ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
