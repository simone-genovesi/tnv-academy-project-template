import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@shared/services/movie.service';
import { FavoriteMovie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: FavoriteMovie[] = [];

  constructor(private movieService: MovieService, private authService: AuthService ) { }

  ngOnInit(): void {
    const userId = this.authService.getCurrentUser().id;

    this.movieService.getFavoriteByUserId(userId).subscribe((res: FavoriteMovie[]) => {
      this.favorites = res;
      console.log(this.favorites);
    });
  }
  
  deleteFavorite(id: string | undefined) {
    console.log(id);
    const index = this.favorites.findIndex(favorite => favorite.id === id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
    this.movieService.deleteFavorite(id).pipe(
      switchMap(() => {
        return this.movieService.getFavoriteByUserId(this.authService.getCurrentUser().id);
      })
    ).subscribe((res: FavoriteMovie[]) => {
      this.favorites = res;
    });
  }
}