import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

const COMMON_COMPONENTS = [
    FilmDetailsComponent,
    NavigationMenuComponent,
    SearchBoxComponent
];

@NgModule ({
    imports: [BrowserModule],
    declarations: COMMON_COMPONENTS,
    exports: COMMON_COMPONENTS,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppCommonModule {}
