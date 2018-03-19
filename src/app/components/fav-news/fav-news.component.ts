import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-fav-news',
  templateUrl: './fav-news.component.html',
  styleUrls: ['./fav-news.component.css'],
  providers:[NewsService]
})
export class FavNewsComponent implements OnInit {
	newsList= [];
  //title:String;
 

  constructor(private newsService : NewsService) { }

  ngOnInit() {
  	this.newsService.showNew().subscribe((res) =>{
  	this.newsList = res.news;
  	},
  	 (error) =>{  
  	 		console.log("error");	
  	})
  }



  /*deleteFavourite(title ){
    this.newsService.showNew().subscribe((res)=> {
      this.favourites = res;
      this.newsService.deleteFavourites(this.favourites[title].title).subscribe((res1)=>{});
      this.ngOnInit();


    });
   }*/

  /*deleteFavourite(title){
    console.log(title);
    this.newsService.showNew().subscribe((res)=>{
      this.newsList=res.news;
      this.newsService.deleteFavourites(title).subscribe((res1)=>{});
      this.ngOnInit();
    });
  }*/

  deleteFavourite(_new){
  this.newsService.deleteFavourites(_new).subscribe((res)=>{
    alert(res);}
    ,(err)=>
  {
    alert(err);
  });
}
}