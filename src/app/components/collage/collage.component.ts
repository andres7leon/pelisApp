import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.scss']
})
export class CollageComponent implements OnInit {
  
  @Input() arrayMovie: any[] = [];
  
  constructor() {
  }

  ngOnInit() {
  }

}
