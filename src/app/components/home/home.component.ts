import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  peliculas: any[] = [];
  peliculasKids: any[] = [];
  peliculasYear: any[] = [];

  constructor(private _peliculasService: PeliculasService) {
    this._peliculasService.getMovies()
            .subscribe( (data: any) => {
              this.peliculas = data.results;
            }
          )
    this._peliculasService.getMoviesKids()
      .subscribe( (data: any) => {
        this.peliculasKids = data.results;
      }
    )

    this._peliculasService.getMoviesYear()
      .subscribe( (data: any) => {
        this.peliculasYear = data.results;
      }
    )
  }

  ngOnInit() {
  }

}
