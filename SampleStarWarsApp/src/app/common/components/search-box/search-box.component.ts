import { Component, Input } from '@angular/core';

import { FilmModel } from '../../models/film.model';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css', '../navigation-menu/navigation-menu.component.css']
})
export class SearchBoxComponent {
  closeRecommendations = false;
  filmsList = Array<FilmModel>();
  search: string;
  selectedFilms = Array<FilmModel>();
  prevSearch = Array<string>();

  constructor(private readonly filmsService: FilmsService) {}

  selectFilm(title: string) {
    const searchedFilms = this.getFilmByTitle(title);
    let repeated = false;

    searchedFilms.forEach(searchedfilm => {
      repeated = false;
      this.selectedFilms.forEach(selectedFilm => {
        if (searchedfilm.title === selectedFilm.title) {
          repeated = true;
        }
      });

      if (!repeated) {
        this.selectedFilms.push(searchedfilm);
      }
    });
  }

  onClick() {
    this.selectedFilms = Array<FilmModel>();
    this.selectFilm(this.search);
    let repeated = false;
    this.prevSearch.forEach(search => {
      if (search === this.search) {
        repeated = true;
      }
    });

    if (!repeated && this.search !== '') {
      this.prevSearch.push(this.search);
    }

    this.filmsService.setSelectedFilms(this.selectedFilms);
  }

  onOptionFilm(film: FilmModel) {
    this.closeRecommendations = true;
    this.selectedFilms = Array<FilmModel>();
    this.selectedFilms.push(film);
  }

  onSearchBox(control: string) {
    this.search = control;

    if (this.search === '') {
      this.closeRecommendations = false;
    } else {
      this.filmsList = this.filmsService.getRecommendations(this.search);
    }
  }

  private getFilmByTitle(title: string) {
    return this.filmsService.getFilmByTitle(title);
  }
}
