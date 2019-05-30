import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  movies: any;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) { }
  ngOnInit() {    
    this.route.params.subscribe(myParams => {  
      //let input = parseInt(myParams["searchValue"]);
      let input = myParams.searchValue;
      this.service.search(input).subscribe((data) => { 
        this.movies = data; 
        if(this.movies.length === 0){
          this.router.navigate(['**']);
        }
      });
    });
  }

}