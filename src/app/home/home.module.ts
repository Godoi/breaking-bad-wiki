import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { CharactersComponent } from './characters/characters.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent,
    HomepageComponent,
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [HomeRoutingModule, CommonModule, LayoutModule, SharedModule],
  exports: [CharactersComponent]
})
export class HomeModule {}
