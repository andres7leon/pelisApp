import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  
  dataPeli: any = {};

  constructor(private router: ActivatedRoute, private _peliculasService: PeliculasService) {
    this.router.params.subscribe( data => {
      this._peliculasService.getMovie( data.id ).subscribe( response => {
        this.dataPeli = response;
      })
    });
  }

  ngOnInit() {
  }

}
