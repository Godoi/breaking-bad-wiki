import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    ListBoxComponent,
    LoadingComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    ListBoxComponent,
    LoadingComponent
  ]
})
export class LayoutModule {}
