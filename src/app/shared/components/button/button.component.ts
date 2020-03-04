import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
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
