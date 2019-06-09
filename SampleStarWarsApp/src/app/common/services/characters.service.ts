import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CharacterModel } from '../models/character.model';

@Injectable()
export class CharactersService {
    charactersList = Array<CharacterModel>();

    constructor(private http: HttpClient) {}

    getCharacters(page?: number): Promise<any> {
        const headers = new HttpHeaders();
        if (!page) {
            page = 0;
        }
        return this.http.get('https://swapi.co/api/people/?page=' + page, { headers })
            .toPromise()
            .then(result => {
                return Promise.resolve(result);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }
}
