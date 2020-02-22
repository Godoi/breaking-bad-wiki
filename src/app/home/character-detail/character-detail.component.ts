import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.setBackground();
  }
  setBackground() {
    document.getElementsByTagName('html')[0].classList.add('site-content');
  }
}
