import { BehaviorSubject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FilmModel } from '../models/film.model';

@Injectable()
export class FilmsService {
    filmsList = Array<FilmModel>();
    recommendationList = Array<FilmModel>();
    selectedFilmsSubject: BehaviorSubject<any>;

    constructor(private http: HttpClient) {

        this.selectedFilmsSubject = new BehaviorSubject<any>(null);

        this.getFilms()
        .then(films => {
            this.convertToArrayFilms(films.results);
        })
        .catch(error => {
            console.log(error);
        });
    }

    getFilmByTitle(title: string) {
        const sol = [];
        this.filmsList.forEach(film => {
            if (film.title.toLowerCase().match(title.toLowerCase())) {
                sol.push(film);
            }
        });

        return sol;
    }

    getFilms(): Promise<any> {
        const headers = new HttpHeaders();

        return this.http.get('https://swapi.co/api/films/', { headers })
            .toPromise()
            .then(result => {
                return Promise.resolve(result);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }

    getRecommendations(search: string) {
        this.recommendationList = Array<FilmModel>();
        this.filmsList.forEach(film => {
            if (film.title.toLowerCase().match(search.toLowerCase()) && film.title.toLowerCase() !== search.toLowerCase()) {
                this.recommendationList.push(film);
            }
        });

        return this.recommendationList;
    }

    getSelectedFilms() {
        return this.selectedFilmsSubject.asObservable();
    }

    setSelectedFilms(listFilms: Array<FilmModel>) {
        this.selectedFilmsSubject.next(listFilms);
    }

    private convertToArrayFilms(array) {
        array.forEach(film => {
            this.filmsList.push(new FilmModel(film.title, film.opening_crawl));
        });
      }
}
