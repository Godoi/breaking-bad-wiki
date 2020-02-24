import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICharacters } from 'src/app/shared/model/characters';
import { CharactersService } from 'src/app/services/characters.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  characters: ICharacters;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private service: CharactersService
  ) {}

  ngOnInit() {
    this.setBackground();
    this.route.params.subscribe(params => {
      this.getLimitCharacters(params.id);
    });
  }
  setBackground() {
    document.getElementsByTagName('html')[0].classList.add('site-content');
  }
  getLimitCharacters(id: number) {
    this.subscriptions.add(
      this.service
        .getSpecificCharacters(id)
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
