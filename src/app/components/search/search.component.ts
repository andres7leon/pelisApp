import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  arraySearch: any [] = [];
  textSearch: string;

  constructor(private _router: ActivatedRoute, private _peliculasService: PeliculasService) {
    this._router.params.subscribe( url => {
      this._peliculasService.getSearch(url.movie)
        .subscribe( result => {
          this.textSearch = url.movie;
          this.arraySearch = result['results'];
        })
    })
  }

  ngOnInit() {
  }

}
