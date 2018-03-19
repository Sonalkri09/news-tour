import { Component, OnInit, Input } from '@angular/core';
import  {NewsService} from '../../../../services/news.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers:[NewsService]
})
export class NewComponent implements OnInit {

  @Input() _new: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  // Add favourite movie to database
  addNew(_new) {
  	this.newsService.addNew(_new).subscribe((res) =>{
  		
  	}, (error) =>{
  		alert("cant add duplicate");
  	})
  }

}
