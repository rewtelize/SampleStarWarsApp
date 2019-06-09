import { Component } from '@angular/core';

import { CharacterModel } from './common/models/character.model';
import { CharactersService } from './common/services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'SampleStarWarsApp';

    constructor() {}
}
