import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteMovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/@shared/services/movie.service';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'tnv-favorites-item',
  templateUrl: './favorites-item.component.html',
  styleUrls: ['./favorites-item.component.scss']
})
export class FavoritesItemComponent {
  
  @Input() favorite: Partial<FavoriteMovie> = {};
  @Output() deleteFavorite = new EventEmitter();

  imageBaseUrl: string = "https://image.tmdb.org/t/p/w500";

  constructor(private movieService: MovieService, private authService: AuthService ) { }

  onDeleteFavorite(userId: number | undefined, movieId: number | undefined) {
    this.movieService.deleteFavorite(userId, movieId);
  }
}