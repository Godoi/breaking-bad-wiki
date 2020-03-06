import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LayoutModule } from 'src/app/layout/layout.module';
import { CharactersComponent } from './characters.component';
import { CharactersService } from 'src/app/services/characters.service';
import { MOCK_CHARACTERS, MOCK_CHARACTERS_RESULT, MOCK_CHARACTERS_LIMIT } from '../../shared/mock/characters';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let charactersService: CharactersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      imports: [HttpClientTestingModule, InfiniteScrollModule, LayoutModule]
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
      expect(document.getElementsByTagName('html')[0].className).toEqual('site-content');
    });
    it('should loading be true before subscribe', () => {
      jest
        .spyOn(charactersService, 'getAllCharacters')
        .mockImplementation(() => of(MOCK_CHARACTERS_RESULT[0]).pipe(delay(100)));
      component.ngOnInit();
      expect(component.loading).toBeTruthy();
    });
    it('should loading be false after subscribe', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_RESULT[0]));
      component.ngOnInit();
      expect(component.loading).toBeFalsy();
    });
    it('should call the GET api getLimitCharacters', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.ngOnInit();
      expect(charactersService.getLimitCharacters).toHaveBeenCalled();
    });
    it('should call the GET api getAllCharacters', () => {
      jest.spyOn(charactersService, 'getAllCharacters').mockReturnValue(of(MOCK_CHARACTERS));
      component.ngOnInit();
      expect(charactersService.getAllCharacters).toHaveBeenCalled();
    });
  });
  describe('setBackground', () => {
    it('should contain the site-content class in the html tag', () => {
      component.setBackground();
      expect(document.getElementsByTagName('html')[0].className).toEqual('site-content');
    });
  });
  describe('getAllCharacters', () => {
    it('should loading be true before subscribe', () => {
      jest
        .spyOn(charactersService, 'getAllCharacters')
        .mockImplementation(() => of(MOCK_CHARACTERS_RESULT[0]).pipe(delay(100)));
      component.getAllCharacters();
      expect(component.loading).toBeTruthy();
    });
    it('should loading be false after subscribe', () => {
      jest.spyOn(charactersService, 'getAllCharacters').mockReturnValue(of(MOCK_CHARACTERS));
      component.getAllCharacters();
      expect(component.loading).toBeFalsy();
    });
    it('should set content characters', () => {
      jest.spyOn(charactersService, 'getAllCharacters').mockReturnValue(of(MOCK_CHARACTERS));
      component.getAllCharacters();
      expect(component.characters).toEqual(MOCK_CHARACTERS);
    });
    it('should call the GET api getAllCharacters', () => {
      jest.spyOn(charactersService, 'getAllCharacters').mockReturnValue(of(MOCK_CHARACTERS));
      component.getAllCharacters();
      expect(charactersService.getAllCharacters).toHaveBeenCalled();
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
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));

      component.getLimitCharacters(3);
      expect(component.loading).toBeFalsy();
    });
    it('should return null getLimitCharacters called with null', () => {
      expect(component.getLimitCharacters(null)).toBeNull();
    });
    it('should return null getLimitCharacters called with undefined', () => {
      expect(component.getLimitCharacters(undefined)).toBeNull();
    });
    it('should call the GET api getLimitCharacters', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.getLimitCharacters(3);
      expect(charactersService.getLimitCharacters).toHaveBeenCalled();
    });
    it('should not call the GET api getLimitCharacters', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.getLimitCharacters(null);
      expect(charactersService.getLimitCharacters).not.toHaveBeenCalled();
    });
    it('should not call the GET api getLimitCharacters', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.getLimitCharacters(undefined);
      expect(charactersService.getLimitCharacters).not.toHaveBeenCalled();
    });
  });
  describe('getCharactersScroll', () => {
    it('should spinner be true before subscribe', () => {
      jest
        .spyOn(charactersService, 'getLimitCharacters')
        .mockImplementation(() => of(MOCK_CHARACTERS_LIMIT).pipe(delay(100)));
      component.getCharactersScroll(3);
      expect(component.spinner).toBeTruthy();
    });
    it('should spinner be false after subscribe', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.getCharactersScroll(3);
      expect(component.spinner).toBeFalsy();
    });
    it('should return null getCharactersScroll called with null', () => {
      expect(component.getCharactersScroll(null)).toBeNull();
    });
    it('should return null getCharactersScroll called with undefined', () => {
      expect(component.getCharactersScroll(undefined)).toBeNull();
    });
    it('should call the GET api getLimitCharacters', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.getCharactersScroll(3);
      expect(charactersService.getLimitCharacters).toHaveBeenCalled();
    });
    it('should not call the GET api getLimitCharacters', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.getCharactersScroll(null);
      expect(charactersService.getLimitCharacters).not.toHaveBeenCalled();
    });
    it('should not call the GET api getLimitCharacters', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.getCharactersScroll(undefined);
      expect(charactersService.getLimitCharacters).not.toHaveBeenCalled();
    });
  });
  describe('getQuantCharacters', () => {
    it('should call the GET api getAllCharacters', () => {
      jest.spyOn(charactersService, 'getAllCharacters').mockReturnValue(of(MOCK_CHARACTERS));
      component.getQuantCharacters();
      expect(charactersService.getAllCharacters).toHaveBeenCalled();
    });
    it('should contain total number of characters', () => {
      jest.spyOn(charactersService, 'getAllCharacters').mockReturnValue(of(MOCK_CHARACTERS));
      component.getQuantCharacters();
      expect(component.quantCharacters).toEqual(9);
    });
  });
  describe('onScroll', () => {
    it('should spinner be true before subscribe', () => {
      jest
        .spyOn(charactersService, 'getLimitCharacters')
        .mockImplementation(() => of(MOCK_CHARACTERS_LIMIT).pipe(delay(100)));
      component.onScroll();
      expect(component.spinner).toBeTruthy();
    });
    it('should spinner be false after subscribe', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.onScroll();
      expect(component.spinner).toBeFalsy();
    });
    it('should call the GET api getLimitCharacters', () => {
      jest.spyOn(charactersService, 'getLimitCharacters').mockReturnValue(of(MOCK_CHARACTERS_LIMIT));
      component.onScroll();
      expect(charactersService.getLimitCharacters).toHaveBeenCalled();
    });
    it('should return null', () => {
      component.quantCharacters = 0;
      expect(component.onScroll()).toBeNull();
    });
  });
});
