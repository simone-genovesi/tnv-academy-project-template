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
  
  getRanking(userId: number){
    return this.http.get<Ranking[]>(`${this.nodeApiUrl}/rankingall/${userId}`);
  }

  updateRanking(userId: number, ranking: Partial<Ranking>){
    return this.http.patch<Ranking>(`${this.nodeApiUrl}/updateranking/${userId}`, ranking);
  }
}
