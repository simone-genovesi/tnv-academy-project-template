import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Ranking } from 'src/app/models/ranking';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-ranking-item',
  templateUrl: './ranking-item.component.html',
  styleUrls: ['./ranking-item.component.scss']
})
export class RankingItemComponent {

  @Input() ranking: Partial<Ranking> = {};
  @Input() index: number | undefined;
  username!: string;

  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
    this.authService.getUserById(this.ranking.userId!).subscribe((user: User) => {
      this.username = user.username;
      console.log(this.username);
      console.log(this.ranking);
    });
  }
}
