import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Subscription, of } from 'rxjs';
import { take, finalize, catchError } from 'rxjs/operators';
import { ICharacters } from '../../shared/model/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  batch = 3;
  lastKey: string;
  quantCharacters: number;
  characters: ICharacters;
  loading: boolean;
  spinner: boolean;
  isError: boolean;
  constructor(private service: CharactersService) {}

  ngOnInit() {
    this.setBackground();
    this.getLimitCharacters(this.batch);
    this.getQuantCharacters();
  }
  setBackground() {
    document.getElementsByTagName('html')[0].removeAttribute('class');
    document.getElementsByTagName('html')[0].classList.add('site-content');
  }
  getAllCharacters() {
    this.loading = true;
    this.subscriptions.add(
      this.service
        .getAllCharacters()
        .pipe(
          take(1),
          finalize(() => (this.loading = false))
        )
        .subscribe(res => {
          return (this.characters = res);
        })
    );
  }
  getCharactersScroll(limit: number) {
    if (!limit) {
      return null;
    }
    this.spinner = true;
    this.subscriptions.add(
      this.service
        .getLimitCharacters(limit)
        .pipe(
          take(1),
          finalize(() => (this.spinner = false))
        )
        .subscribe(res => {
          return (this.characters = res);
        })
    );
  }
  getLimitCharacters(limit: number) {
    if (!limit) {
      return null;
    }
    this.loading = true;
    this.subscriptions.add(
      this.service
        .getLimitCharacters(limit)
        .pipe(
          take(1),
          finalize(() => (this.loading = false))
        )
        .subscribe(res => {
          return (this.characters = res);
        })
    );
  }
  getQuantCharacters() {
    this.subscriptions.add(
      this.service
        .getAllCharacters()
        .pipe(take(1))
        .subscribe(res => {
          return (this.quantCharacters = Object.values(res).length);
        })
    );
  }
  onScroll() {
    if (this.quantCharacters <= this.batch) {
      return null;
    }
    this.batch = this.batch + 3;
    this.getCharactersScroll(this.batch);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
