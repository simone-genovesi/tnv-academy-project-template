import { Component, OnInit, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';
import { FavoriteMovie, Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';
import { MovieService } from 'src/app/@shared/services/movie.service';

@Component({
  selector: 'tnv-favorites-item',
  templateUrl: './favorites-item.component.html',
  styleUrls: ['./favorites-item.component.scss']
})
export class FavoriteMovieItemComponent implements OnInit {

  @Input() movieUserIdList: Partial<FavoriteMovie>[] = [];
  @Input() movieList: Partial<Movie>[] = [];
  @Input() movie: Partial<Movie> = {};
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  currentUser: Partial<User> = {};

  constructor(
    private authService: AuthService,
    private movieService: MovieService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onSubmit(form: NgForm): void {
    const { id: userId } = this.currentUser;
    this.movieService.deleteFavorite(userId, this.movie.id).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      }
    });
  }

}