import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css'],
  providers:[NewsService]
})
export class NewsSearchComponent implements OnInit {

  @Output() success = new EventEmitter<any>();
	public searchedText: string='';
	public newsList=[];

  constructor(private newsService : NewsService) { }

  ngOnInit() {
  }


  // Function to get search text and make service call to get movies from newsapi
  searchNew() {
  	this.newsService.searchNew(this.searchedText).subscribe((res) =>{
  	this.newsList = res.articles;
  	this.success.emit({
      'newsList': this.newsList
  });
  	},
  	 (error) =>{
  	 		console.log("error");	
  	})
  }

}
