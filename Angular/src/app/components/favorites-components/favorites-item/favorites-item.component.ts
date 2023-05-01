import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteMovie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-favorites-item',
  templateUrl: './favorites-item.component.html',
  styleUrls: ['./favorites-item.component.scss']
})
export class FavoritesItemComponent {
  
  @Input() favorite: Partial<FavoriteMovie> = {};

  @Output() deleteFavorite = new EventEmitter();

  imageBaseUrl: string = "https://image.tmdb.org/t/p/w500";

  constructor() { }

  onDeleteFavorite(id: string = "") {
    this.deleteFavorite.emit(id);
    console.log(id);
  }
}