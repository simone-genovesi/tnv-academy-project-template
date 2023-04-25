import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ranking } from 'src/app/models/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  nodeApiUrl: String = "http://localhost:1234/api"
  latestGamePoints: number = 0;

  constructor(private http: HttpClient) { }

  getRankingByUserId(userId: number){
    return this.http.get<Ranking>(`${this.nodeApiUrl}/ranking/${userId}`);
  }

  createRanking(ranking: Partial<Ranking>){
    this.latestGamePoints = ranking.gamePoints || 0 ;
    return this.http.post<Ranking>(`${this.nodeApiUrl}/ranking`, ranking); 
  }

  getRanking(userId: number){
    return this.http.get<Ranking[]>(`${this.nodeApiUrl}/rankingall/${userId}`);
  }
}
