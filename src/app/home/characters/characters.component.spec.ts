import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LayoutModule } from 'src/app/layout/layout.module';
import { CharactersComponent } from './characters.component';
import { CharactersService } from 'src/app/services/characters.service';
import {
  MOCK_CHARACTERS,
  MOCK_CHARACTERS_RESULT,
  MOCK_CHARACTERS_LIMIT
} from '../../shared/mock/characters';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let charactersService: CharactersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      imports: [HttpClientTestingModule, LayoutModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
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
    it('should loading be true before subscribe', () => {
      jest
        .spyOn(charactersService, 'getAllCharacters')
        .mockImplementation(() =>
          of(MOCK_CHARACTERS_RESULT[0]).pipe(delay(100))
        );
      component.ngOnInit();
      expect(component.loading).toBeTruthy();
    });
    it('should loading be false after subscribe', () => {
      jest
        .spyOn(charactersService, 'getAllCharacters')
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
  describe('getAllCharacters', () => {
    it('should loading be true before subscribe', () => {
      jest
        .spyOn(charactersService, 'getAllCharacters')
        .mockImplementation(() =>
          of(MOCK_CHARACTERS_RESULT[0]).pipe(delay(100))
        );
      component.ngOnInit();
      expect(component.loading).toBeTruthy();
    });
    it('should loading be false after subscribe', () => {
      jest
        .spyOn(charactersService, 'getAllCharacters')
        .mockReturnValue(of(MOCK_CHARACTERS_RESULT[0]));

      component.ngOnInit();
      expect(component.loading).toBeFalsy();
    });
    it('should set content characters', () => {
      jest
        .spyOn(charactersService, 'getAllCharacters')
        .mockReturnValue(of(MOCK_CHARACTERS));
      component.getAllCharacters();
      expect(component.characters).toEqual(MOCK_CHARACTERS);
    });
  });
  describe('getLimitCharacters', () => {
    it('should loading be true before subscribe', () => {
      jest
        .spyOn(charactersService, 'getLimitCharacters')
        .mockImplementation(() => of(MOCK_CHARACTERS_LIMIT).pipe(delay(100)));
      component.getLimitCharacters(3);
      expect(component.loading).toBeTruthy();
    });
    it('should loading be false after subscribe', () => {
      jest
        .spyOn(charactersService, 'getLimitCharacters')
        .mockReturnValue(of(MOCK_CHARACTERS_LIMIT));

      component.getLimitCharacters(3);
      expect(component.loading).toBeFalsy();
    });
    it('should return null getLimitCharacters called with null', () => {
      expect(component.getLimitCharacters(null)).toBeNull();
    });
    it('should return null getLimitCharacters called with undefined', () => {
      expect(component.getLimitCharacters(undefined)).toBeNull();
    });
  });
});
