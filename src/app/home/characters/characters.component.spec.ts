import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomepageComponent } from '../homepage/homepage.component';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      imports: [
        BrowserModule,
        RouterTestingModule.withRoutes([
          { path: '', component: HomepageComponent },
          { path: 'characters', component: CharactersComponent },
          {
            path: 'characters-detail/:id',
            component: CharacterDetailComponent
          }
        ]),
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.get(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // setBackground
  // getAllCharacters
  // getLimitCharacters
});
