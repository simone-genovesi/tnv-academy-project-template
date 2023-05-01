import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@shared/services/movie.service';
import { FavoriteMovie } from 'src/app/models/movie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: FavoriteMovie[] = [];

  constructor(private http: HttpClient, private movieService: MovieService, private authService: AuthService ) { }

  ngOnInit(): void {
    const userId = this.authService.getCurrentUser().id;

    this.movieService.getFavoriteByUserId(userId).subscribe((res: FavoriteMovie[]) => {
      this.favorites = res;
      console.log(this.favorites);
    });
  }
  deleteFavorite(userId: number | undefined, movieId: number | undefined) {
    this.movieService.deleteFavorite(userId, movieId);
  }

  }