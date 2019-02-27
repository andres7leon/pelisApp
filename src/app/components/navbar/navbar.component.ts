import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  textMovie: string;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  goTo(){
    this._router.navigate(['search',this.textMovie]);
  }
}
