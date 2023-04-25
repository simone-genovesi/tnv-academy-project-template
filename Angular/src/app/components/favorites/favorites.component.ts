import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  movies = [
    { id: 1, title: 'Il padrino', year: 1972, rating: 5 },
    { id: 2, title: 'I predatori dell\'arca perduta', year: 1981, rating: 5 },
    { id: 3, title: 'L\'Impero colpisce ancora', year: 1980, rating: 4 },
    { id: 4, title: 'Le Ali della libertà', year: 1994, rating: 4 },
    { id: 5, title: 'Lo Squalo', year: 1975, rating: 4 },
    { id: 6, title: 'Quei Bravi Ragazzi', year: 1990, rating: 4 },
    { id: 7, title: 'Apocalypse Now', year: 1979, rating: 4 },
    { id: 8, title: 'Cantando sotto la pioggia', year: 1952, rating: 4 },
    { id: 9, title: 'Pulp Fiction', year: 1994, rating: 4 },
    { id: 10, title: 'Fight Club', year: 1999, rating: 4 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
