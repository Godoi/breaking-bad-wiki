import { Component, OnInit, Input } from '@angular/core';
import { ICharacters } from 'src/app/shared/model/characters';

@Component({
  selector: 'app-detailed-list',
  templateUrl: './detailed-list.component.html',
  styleUrls: ['./detailed-list.component.scss']
})
export class DetailedListComponent implements OnInit {
  @Input()
  data: ICharacters[] = [];

  constructor() {}

  ngOnInit() {}
}
