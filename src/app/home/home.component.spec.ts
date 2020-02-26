import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { CharactersService } from 'src/app/services/characters.service';

import { LayoutModule } from '../layout/layout.module';
import { CharactersComponent } from './characters/characters.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let charactersService: CharactersService;

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const cookieServiceMock = {
    set: jest.fn(),
    get: jest.fn(),
    delete: jest.fn()
  };

  const charactersServiceMock = {
    getAllCharacters: jest.fn(() => of(true))
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HomepageComponent,
        CharactersComponent,
        CharacterDetailComponent
      ],
      imports: [
        HttpClientModule,
        BrowserModule,
        RouterTestingModule,
        LayoutModule
      ],
      providers: [
        { provide: CharactersService, useValue: charactersServiceMock },
        { provide: CookieService, useValue: cookieServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    charactersService = TestBed.get(CharactersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
