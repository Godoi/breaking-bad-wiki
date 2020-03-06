import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Output() getLimit = new EventEmitter();
  @Output() getAll = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  getLimitCharacters(limit: number) {
    this.getLimit.emit(limit);
  }

  getAllCharacters() {
    this.getAll.emit();
  }
}
