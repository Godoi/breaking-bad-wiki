import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { LoadingComponent } from './loading/loading.component';
import { DetailedListComponent } from './detailed-list/detailed-list.component';
import { SharedModule } from '../shared/shared.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    ListBoxComponent,
    LoadingComponent,
    DetailedListComponent,
    DropdownComponent,
    SpinnerComponent
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    ListBoxComponent,
    LoadingComponent,
    DetailedListComponent,
    DropdownComponent,
    SpinnerComponent
  ]
})
export class LayoutModule {}
