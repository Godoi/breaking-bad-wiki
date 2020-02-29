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
  characters: ICharacters;
  loading: boolean;
  isError: boolean;
  constructor(private service: CharactersService) {}

  ngOnInit() {
    this.setBackground();
    this.getAllCharacters();
  }
  setBackground() {
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
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
