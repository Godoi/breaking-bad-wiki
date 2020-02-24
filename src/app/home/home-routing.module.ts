import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharactersComponent } from './characters/characters.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { EpisodeComponent } from './episode/episode.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'characters',
        component: CharactersComponent
      },
      {
        path: 'characters-detail/:id',
        component: CharacterDetailComponent
      },
      {
        path: 'episodes',
        component: EpisodeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
