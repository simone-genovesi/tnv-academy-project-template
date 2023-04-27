import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@shared/services/movie.service';
import { FavoriteMovie } from 'src/app/models/favorite-movie';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private favoritesComponent: FavoritesComponent, private authService: AuthService) { }

  favoriteMovies: (FavoriteMovie | undefined)[] = [];

  ngOnInit(): void {

    const userId = this.authService.getCurrentUser().id;

    this.MovieService.getFavorites(userId).subscribe((res: FavoriteMovie[]) => {
      this.favoriteMovies = res;
      console.log(this.favoriteMovies);
    });

  }
}
