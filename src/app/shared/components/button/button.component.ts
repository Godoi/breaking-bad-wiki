import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input()
  public label: string;

  @Input()
  public disabled: string;

  @Input()
  public type: 'submit' | 'button';

  constructor() {}
}
