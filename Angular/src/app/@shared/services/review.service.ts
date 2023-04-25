import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from 'src/app/models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  nodeApiUrl: String = "http://localhost:1234/api"

  constructor(private http: HttpClient) { }

  addReview(review: Review){
    return this.http.post<Review>(`${this.nodeApiUrl}`, review); 
  }
}
