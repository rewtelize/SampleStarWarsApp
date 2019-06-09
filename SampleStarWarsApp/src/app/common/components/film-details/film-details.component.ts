import { Observable } from 'rxjs';

import { Component, Input } from '@angular/core';

import { FilmModel } from '../../models/film.model';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent {
  selectedFilms = Array<FilmModel>();
  filmsObserver: Observable<any>;

  constructor(private readonly filmsService: FilmsService) {
    this.filmsObserver = this.filmsService.getSelectedFilms();
    this.filmsObserver.subscribe(filmsList => {
        if (filmsList) {
            this.selectedFilms = filmsList;
        }
    });
  }
}
