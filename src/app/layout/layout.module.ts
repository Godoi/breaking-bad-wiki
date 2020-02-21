import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CharactersComponent } from '../home/characters/characters.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, NotFoundComponent],
  entryComponents: [CharactersComponent]
})
export class LayoutModule {}
