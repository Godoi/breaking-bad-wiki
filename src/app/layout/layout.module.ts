import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { HomeRoutingModule } from '../home/home-routing.module';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, ListBoxComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    ListBoxComponent,
    HomeRoutingModule
  ]
})
export class LayoutModule {}
