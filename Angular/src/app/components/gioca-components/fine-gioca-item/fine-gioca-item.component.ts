import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbAlert, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@shared/services/movie.service';
import { Movie, Rating } from 'src/app/models/movie';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-fine-gioca-item',
  templateUrl: './fine-gioca-item.component.html',
  styleUrls: ['./fine-gioca-item.component.scss']
})



export class FineGiocaItemComponent implements OnInit {

  ratings: Rating[] = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
    { value: 5, viewValue: 5 },
  ];


  @Input() movie: Partial<Movie> = {};
  currentUser: Partial<User> = {};
  private _success = new Subject<string>();
  reviewText: string = '';
  remainingChars: number = 160;
  rating: number | undefined;

  imageBaseUrl: string = "https://image.tmdb.org/t/p/w500"

  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert | undefined;

  constructor(private movieService: MovieService, private authService: AuthService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();

    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  onSubmit(form: NgForm) {
    this.movieService.createFavorite({ 
      userId: this.currentUser.id, 
      movieTitle: this.movie.title, 
      posterPath: this.movie.poster_path, 
      review: this.reviewText, 
      rating: this.rating 
    }).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }

  updateRemainingChars() {
    this.remainingChars = 160 - this.reviewText.length;
  }
}


