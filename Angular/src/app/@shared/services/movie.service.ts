import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Crit, Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  APIKey : string = "api_key=7878a888882e41ddb7ba8f3c2c11e44c"

  constructor(private http: HttpClient) { }

  movies: Partial<Movie>[] = [];

  getRandomMovie(index: number) {
    // Per determinare questo valore facciamo eventualmente una query su movies/latest per avere l'id dell'ultimo Film inserito su TMDB
    const latestId = 30000;
    const randomId = Math.round(Math.random() * latestId);
    
      this.http
      .get(
        `https://api.themoviedb.org/3/movie/${randomId}?${this.APIKey}&language=it-IT`
      )
      .subscribe({
        // Qui non usate any ovviamente, ma create l'interfaccia typescript per la response
        next: (res: Partial<Movie>) => {
          console.log('ID trovato', randomId);
          if (res.poster_path) {
            this.movies[index] = res;
          } else {
            console.log('Film senza poster');
            this.getRandomMovie(index);
          }
        },
        error: () => {
          console.log('ID non esistente, retry!', randomId);
          this.getRandomMovie(index);
        },
      });
  }

  getRandomCrit(){

    const maxCrit = 5;
    const crits : Crit[] = [
      {tag: "anno di uscita", key: `release_date`},
      {tag: "media voti", key: `vote_average`},
      {tag: "durata", key: `runtime`},
      {tag: "incassi", key: `revenue`},
      {tag: "budget", key: `budget`}
    ]; 

    const randomNumber = Math.floor(Math.random() * crits.length);

    return crits[randomNumber];
  }
}
