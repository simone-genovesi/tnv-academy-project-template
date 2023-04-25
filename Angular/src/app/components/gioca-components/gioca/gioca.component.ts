import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@shared/services/movie.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Movie, Crit } from 'src/app/models/movie';
import { RankingService } from 'src/app/@shared/services/ranking.service';

@Component({
  selector: 'tnv-gioca',
  templateUrl: './gioca.component.html',
  styleUrls: ['./gioca.component.scss']
})
export class GiocaComponent implements OnInit {

  constructor(private movieService: MovieService, private authService: AuthService, private rankingService: RankingService) { }

  movies = this.movieService.movies;
  movie: Partial<Movie> = {};
  orderedMovies: Partial<Movie>[] = [];
  crit: Crit = {tag:"", key: ``};
  currentUserId = this.authService.getCurrentUser().id;
  imageBaseUrl: string = "https://image.tmdb.org/t/p/w500"
  game = false;
  results = false;

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.movieService.getRandomMovie(index);
    }

    this.crit = this.movieService.getRandomCrit();
    console.log(this.crit.key);
  }

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(this.movies);
  }

  showGame() {
    this.game = !this.game;
  }

  startGame() {

    for (let i = 0; i < 10; i++) {
      this.orderedMovies.push(this.movieService.movies[i]);
    }

    for (let i = 0; i < 10; i++) {
      console.log(this.orderedMovies[i]);
    }

    this.ascendingOrder(this.crit.key);

  }

  finish(form: NgForm) {
    console.log(this.orderedMovies);
    console.log(this.movies);
    let points: number = 0;
    for (let i = 0; i < 10; i++) {
      if (this.orderedMovies[i] == this.movies[i]) {
        points = points + 10;
      }
    }
    this.rankingService.updateRanking(this.currentUserId, { userId: this.currentUserId, gamePoints: points }).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }


  ascendingOrder(crit: string) {
    this.orderedMovies?.sort((a: any , b: any) => {
      if (a[crit] === undefined) return -1; // Mette in fondo gli elementi con proprietà mancanti
      if (b[crit] === undefined) return 1; // Mette in fondo gli elementi con proprietà mancanti
      if (a[crit] > b[crit]) return 1; // Inverte l'ordine di ordinamento
      if (a[crit] < b[crit]) return -1; // Inverte l'ordine di ordinamento
      return 0;
    });
  }
}