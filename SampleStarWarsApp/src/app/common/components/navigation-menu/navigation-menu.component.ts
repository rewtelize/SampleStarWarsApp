import { Component, Input } from '@angular/core';

import { CharacterModel } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {

  charactersList = Array<CharacterModel>();
  currentPage = 1;
  totalPages;

  constructor(private readonly charactersService: CharactersService) {
    this.getCharacters(this.currentPage);
  }

  onCharacter(character) {
    window.location.href = 'http://www.google.com/search?q=' + character.name;
  }

  onPrevCharacter() {
    this.currentPage = this.currentPage - 1;
    this.getCharacters(this.currentPage);
  }

  onNextCharacter() {
    this.currentPage = this.currentPage + 1;
    this.getCharacters(this.currentPage);
  }

  private convertToArrayCharacters(array) {
    array.forEach(character => {
        this.charactersList.push(new CharacterModel(character.name));
    });
  }

  private getCharacters(page?: number) {
    if (!page) {
      page = 0;
    }

    this.charactersList = Array<CharacterModel>();

    this.charactersService.getCharacters(page)
    .then(characters => {
        this.convertToArrayCharacters(characters.results);
        this.totalPages = Math.floor(characters.count / 10) + 1;
    })
    .catch(error => {
        console.log(error);
    });
  }
}
