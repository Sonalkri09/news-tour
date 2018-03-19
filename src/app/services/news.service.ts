import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { newsapi } from '../config/newsapi.config';
import { App } from '../config/app.config';


@Injectable()
export class NewsService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});


  // Function to get search text and make service call to get movies fromTMDB

  searchNew(searchedText) {
    return this.http.get(newsapi.search_url+searchedText+newsapi.key)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   // Add favourite movie to database
  addNew(_new) {
    return this.http.post(App.apiUrl+"news/", _new, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

  showNew() {
    return this.http.get(App.apiUrl+"db")
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   

  
  deleteFavourites(_new){
    return this.http.delete(App.apiUrl+"news/"+_new.id, {headers: this.headers});
  }
  
}


