import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';

@NgModule({
  declarations: [ButtonComponent, ButtonToggleComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, ButtonToggleComponent]
})
export class SharedModule {}
