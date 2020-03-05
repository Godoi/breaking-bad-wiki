import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.setBackground();
  }
  setBackground() {
    document.getElementsByTagName('html')[0].removeAttribute('class');
    document.getElementsByTagName('html')[0].classList.add('home');
  }
}
