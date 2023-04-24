import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-gioca-item',
  templateUrl: './gioca-item.component.html',
  styleUrls: ['./gioca-item.component.scss']
})
export class GiocaItemComponent implements OnInit{

   @Input() movie: Partial<Movie> = {};
  
  imageBaseUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
