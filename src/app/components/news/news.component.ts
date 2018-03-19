import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	public news =[];
  constructor() { }

  ngOnInit() {
  }
  // Update movies list based on search text
  setNewlist(event) {
  	this.news = event.newsList;
  }

}
