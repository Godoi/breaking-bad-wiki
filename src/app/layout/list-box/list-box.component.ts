import { Component, OnInit, Input } from '@angular/core';
import { ICharacters } from 'src/app/shared/model/characters';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
})
export class ListBoxComponent implements OnInit {
  @Input()
  data: ICharacters[] = [];

  constructor() {}

  ngOnInit() {}
}
