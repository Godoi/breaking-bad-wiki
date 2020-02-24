import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { LayoutModule } from '../layout/layout.module';
import { CharactersComponent } from './characters/characters.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent,
    HomepageComponent,
    CharactersComponent,
    CharacterDetailComponent,
    EpisodeComponent
  ],
  imports: [HomeRoutingModule, CommonModule, LayoutModule],
  exports: [CharactersComponent]
})
export class HomeModule {}