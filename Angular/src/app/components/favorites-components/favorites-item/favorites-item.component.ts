import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@shared/services/movie.service';
import { FavoriteMovie } from 'src/app/models';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-favorites-item',
  templateUrl: './favorites-item.component.html',
  styleUrls: ['./favorites-item.component.scss']
})
export class FavoriteItemComponent {

  @Input() favorite: Partial<FavoriteMovie> = {};
  username!: string;

  constructor(private authService: AuthService, private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.authService.getUserById(this.favorite.userId!).subscribe((user: User) => {
      this.username = user.username;
      console.log(this.username);
      console.log(this.favorite);
    });
  }

  getFavoriteUsername() {
    return this.username;
  }
}
