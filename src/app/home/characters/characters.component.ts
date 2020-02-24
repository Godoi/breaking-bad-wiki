import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ICharacters } from '../../shared/model/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  characters: ICharacters;
  constructor(private service: CharactersService) {}

  ngOnInit() {
    this.setBackground();
    this.getLimitCharacters(9);
  }
  setBackground() {
    document.getElementsByTagName('html')[0].classList.add('site-content');
  }
  getAllCharacters() {
    this.subscriptions.add(
      this.service
        .getAllCharacters()
        .pipe(take(1))
        .subscribe(res => {
          return (this.characters = res);
        })
    );
  }
  getLimitCharacters(limit: number) {
    this.subscriptions.add(
      this.service
        .getLimitCharacters(limit)
        .pipe(take(1))
        .subscribe(res => {
          return (this.characters = res);
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
