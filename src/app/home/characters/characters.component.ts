import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.setBackground();
  }
  setBackground() {
    document.getElementsByTagName('html')[0].classList.add('site-content');
  }
}
