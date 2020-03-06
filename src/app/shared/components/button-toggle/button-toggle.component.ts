import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Input()
  public type: string;

  constructor() {}

  ngOnInit() {}
}
