import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Crit, Movie, FavoriteMovie, DiscoverMovie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  nodeUrl: String = "http://localhost:1234/api";

  APIKey : string = "api_key=7878a888882e41ddb7ba8f3c2c11e44c"
  APIKey2 : string = "api_key=3847043e35bdce9e599f5fb0e3851484"


  constructor(private http: HttpClient) { }

  movies: Partial<Movie>[] = [];

  getRandomMovie() {
    const lastedPage = 500;
    const randomId = Math.round(Math.random() * lastedPage);
    const queryString1 = "language=it-IT&sort_by=popularity.desc&certification.gte=1990&include_adult=false&include_video=false";
    const queryString2 = "with_original_language=en&with_watch_monetization_types=flatrate";

      this.http
      .get(
        `https://api.themoviedb.org/3/discover/movie?${this.APIKey}&${queryString1}&page=${randomId}&${queryString2}`
      )
      .subscribe({

        next: (res: Partial<DiscoverMovie>) => {
            console.log(`Pagina discover: ${randomId}`);
            console.log(res.results);
            let filteredMovies = res.results!.sort(() => Math.random() - 0.5).slice(0,10);
            for(let index = 0; index < filteredMovies.length; index++)
              this.getMovieDetails(filteredMovies[index].id, index);
        },
        error: () => {
          console.log('Errore nella chiamata dei film');
        },
      });
  }

  getMovieDetails(movieId: number, index: number) {
    this.http
      .get(`https://api.themoviedb.org/3/movie/${movieId}?${this.APIKey2}&language=it-IT`)
      .subscribe({
        next: (res: Partial<Movie>) => {
          this.movies[index] = res;
        },
        error: () => {
          console.log('Errore nella chiamata di dettaglio del film');
        },
      });
  }
 

  getRandomCrit(){

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

  getMovie(movieId: number | undefined) {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}?${this.APIKey}&language=it-It`);
  }
  
  getFavoriteByUserId(userId: number | undefined){
    return this.http.get<FavoriteMovie[]>(`${this.nodeUrl}/favorite/${userId}`);
  }
  
  createFavorite(movie: FavoriteMovie){
    return this.http.post<FavoriteMovie>(`${this.nodeUrl}/favorite`, movie); 
  }
  
  deleteFavorite(userId: number | undefined, movieId: number | undefined){
    return this.http.delete<FavoriteMovie>(`${this.nodeUrl}/favorite/${userId}/${movieId}`); 
  }
}
