import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { NewsSearchComponent } from './components/news/news-search/news-search.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { NewComponent } from './components/news/news-list/new/new.component';
import { FavNewsComponent } from './components/fav-news/fav-news.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes :Routes = [
  
  {path: 'news', component:NewsComponent},
  {path: '', redirectTo:'/news',pathMatch:'full'},
  {path: 'favourite', component:FavNewsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    NewsSearchComponent,
    NewsListComponent,
    NewComponent,
    FavNewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
