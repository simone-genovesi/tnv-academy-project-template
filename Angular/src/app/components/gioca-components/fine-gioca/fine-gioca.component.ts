import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@shared/services/movie.service';
import { RankingService } from 'src/app/@shared/services/ranking.service';
import { Ranking } from 'src/app/models/ranking';

@Component({
  selector: 'tnv-fine-gioca',
  templateUrl: './fine-gioca.component.html',
  styleUrls: ['./fine-gioca.component.scss']
})
export class FineGiocaComponent implements OnInit{

  constructor(private movieService: MovieService, private authService: AuthService, public rankingService: RankingService) { }

  movies = this.movieService.movies;
  currentUser = this.authService.getCurrentUser();
  rankingUser: Partial<Ranking> = {};

  ngOnInit(): void {
    let userId = this.currentUser.id
    this.rankingService.getRankingByUserId(userId).subscribe({
      next: (res) => {
        this.rankingUser = res;
        console.log(res);
      }
    });
  }
}
