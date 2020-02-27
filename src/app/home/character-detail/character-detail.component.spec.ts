import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, Router, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LayoutModule } from 'src/app/layout/layout.module';
import { CharacterDetailComponent } from './character-detail.component';
import { CharactersService } from 'src/app/services/characters.service';
import {
  MOCK_CHARACTERS,
  MOCK_CHARACTERS_RESULT,
  MOCK_CHARACTERS_LIMIT
} from '../../shared/mock/characters';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let charactersService: CharactersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDetailComponent],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        LayoutModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/characters-detail/1' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    charactersService = TestBed.get(CharactersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on init', () => {
    it('should contain the site-content class in the html tag', () => {
      component.ngOnInit();
      expect(document.getElementsByTagName('html')[0].className).toEqual(
        'site-content'
      );
    });
    it('should loading be false after subscribe', () => {
      jest
        .spyOn(charactersService, 'getSpecificCharacters')
        .mockReturnValue(of(MOCK_CHARACTERS_RESULT[0]));

      component.ngOnInit();
      expect(component.loading).toBeFalsy();
    });
  });
  describe('setBackground', () => {
    it('should contain the site-content class in the html tag', () => {
      component.setBackground();
      expect(document.getElementsByTagName('html')[0].className).toEqual(
        'site-content'
      );
    });
  });
  describe('getSpecificCharacters', () => {
    it('should loading be true before subscribe', () => {
      jest
        .spyOn(charactersService, 'getSpecificCharacters')
        .mockImplementation(() =>
          of(MOCK_CHARACTERS_RESULT[0]).pipe(delay(100))
        );
      component.getSpecificCharacters(1);
      expect(component.loading).toBeTruthy();
    });
    it('should loading be false after subscribe', () => {
      jest
        .spyOn(charactersService, 'getSpecificCharacters')
        .mockReturnValue(of(MOCK_CHARACTERS_RESULT[0]));

      component.getSpecificCharacters(1);
      expect(component.loading).toBeFalsy();
    });
    it('should return null getSpecificCharacters called with null', () => {
      expect(component.getSpecificCharacters(null)).toBeNull();
    });
    it('should return null getSpecificCharacters called with undefined', () => {
      expect(component.getSpecificCharacters(undefined)).toBeNull();
    });
    it('should set content characters', () => {
      jest
        .spyOn(charactersService, 'getSpecificCharacters')
        .mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.getSpecificCharacters(1);
      expect(component.characters).toEqual(MOCK_CHARACTERS_LIMIT);
    });
  });
});
