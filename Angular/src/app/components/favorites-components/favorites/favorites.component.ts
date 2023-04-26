import { Component, OnInit, Input, NgModule } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Movie, FavoriteMovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/@shared/services/movie.service';
import { User } from 'src/app/models/user';
import { FavoriteItemComponent } from 'src/app/components/favorites-components/favorites-item/favorites-item.component';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoriteComponent implements OnInit {

  @Input() movie: Partial<Movie> = {};
  favorites: Partial<Movie>[] = [];
  currentUser: Partial<User> = {};

  constructor(private movieService: MovieService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.getFavoriteMovies();
  }

  getFavoriteMovies(): void {
    const userId = this.currentUser.id;
    this.movieService.getFavoriteByUserId(userId).subscribe((favoriteMovies: FavoriteMovie[]) => {
      favoriteMovies.forEach((favoriteMovie: FavoriteMovie) => {
        const movieId = favoriteMovie.movieId;
        this.movieService.getMovie(movieId).subscribe((movie: Movie) => {
          this.favorites.push(movie);
        });
      });
    });
  }
}

@NgModule({
  declarations: [FavoriteItemComponent],
  exports: [FavoriteItemComponent]
})
export class FavoritesModule {}
