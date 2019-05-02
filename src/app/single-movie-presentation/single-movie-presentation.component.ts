import { Component, OnInit} from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-single-movie-presentation',
  templateUrl: './single-movie-presentation.component.html',
  styleUrls: ['./single-movie-presentation.component.css']
})
export class SingleMoviePresentationComponent implements OnInit {

  movie: IMovie;

  constructor(private route: ActivatedRoute, private service: DataService){ 

  }

  ngOnInit() {

    this.route.params.subscribe(myParams => {
          
      let i = parseInt(myParams["id"]);

      this.service.getMovie(i).subscribe((data) => { this.movie = data; });


    });


  }

}