import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementsByTagName('html')[0].classList.add('not-found');
  }
}
