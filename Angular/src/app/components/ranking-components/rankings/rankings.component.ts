import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { RankingService } from 'src/app/@shared/services/ranking.service';
import { Ranking } from 'src/app/models/ranking';

@Component({
  selector: 'tnv-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  constructor(private rankingService: RankingService, private authService: AuthService) { }

  rankings: Partial<Ranking>[] = [];

  ngOnInit(): void {

    const userId = this.authService.getCurrentUser().id;

    this.rankingService.getRanking(userId).subscribe((res: Ranking[]) => {
      this.rankings = res;
      console.log(this.rankings);
    });
  }

  
}