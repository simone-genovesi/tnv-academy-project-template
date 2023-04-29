import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from 'src/app/@shared/services/review.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'tnv-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() movieId: string | null = null;
  reviewText: string = '';
  remainingChars: number = 160;
  
  constructor(private reviewService: ReviewService, private authService: AuthService, private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('movieId');
    });
  }

  onReviewSubmit(reviewText: string) {
    if (this.movieId !== null) {
      const reviewData: Review = {
        userId: this.authService.getCurrentUser().id,
        movieId: this.movieId,
        review: reviewText
      };
      this.reviewService.addReview(reviewData).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log('movieId is null');
    }
  }
  updateRemainingChars() {
    this.remainingChars = 160 - this.reviewText.length;
}

}
