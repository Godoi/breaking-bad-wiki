import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CharactersService } from './characters.service';
import {
  MOCK_CHARACTERS,
  MOCK_CHARACTERS_RESULT,
  MOCK_CHARACTERS_LIMIT
} from '../shared/mock/characters';
import { of } from 'rxjs';
import { ɵConsole, inject } from '@angular/core';
import {
  HttpClientModule,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

let service: CharactersService;
let httpMock: HttpTestingController;
let httpTestingController: HttpTestingController;

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [CharactersService],
    imports: [HttpClientModule, HttpClientTestingModule]
  });
  httpTestingController = TestBed.get(HttpTestingController);
  service = TestBed.get(CharactersService);
  httpMock = TestBed.get(HttpTestingController);
  jest.spyOn(console, 'error').mockImplementation(() => undefined);
});

describe('CharactersService', () => {
  const EXPECTED_URL = `https://breakingbadapi.com/api`;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllCharacters', () => {
    it('should send a get request', () => {
      service.getAllCharacters().subscribe();
      const req = httpMock.expectOne(`${EXPECTED_URL}/characters`);
      expect(req.request.method).toBe('GET');
    });
    it('hould call the GET characters api and return all results', () => {
      let dataAll = {};
      service.getAllCharacters().subscribe(data => (dataAll = data));
      const req = httpMock.expectOne(`${EXPECTED_URL}/characters`);
      req.flush(MOCK_CHARACTERS);
      expect(dataAll).toEqual(MOCK_CHARACTERS);
    });
  });

  describe('getLimitCharacters', () => {
    it('should send a get request', () => {
      const LIMIT = 9;
      service.getLimitCharacters(LIMIT).subscribe();
      const req = httpMock.expectOne(
        `${EXPECTED_URL}/characters?limit=${LIMIT}&offset=0`
      );
      expect(req.request.method).toBe('GET');
    });
    it('should call the GET characters api and return the result', () => {
      const LIMIT = 3;
      let dataLimit = {};
      service.getLimitCharacters(LIMIT).subscribe(data => (dataLimit = data));
      const req = httpMock.expectOne(
        `${EXPECTED_URL}/characters?limit=${LIMIT}&offset=0`
      );
      req.flush(MOCK_CHARACTERS_LIMIT);
      expect(dataLimit).toEqual(MOCK_CHARACTERS_LIMIT);
    });
  });

  describe('getSpecificCharacters', () => {
    it('should send a get request', () => {
      const ID = 1;
      service.getSpecificCharacters(ID).subscribe();
      const req = httpMock.expectOne(`${EXPECTED_URL}/characters/${ID}`);
      expect(req.request.method).toBe('GET');
    });
    it('should call the GET characters api and return the result', () => {
      const ID = 1;
      let dataSpecific = {};
      service
        .getSpecificCharacters(ID)
        .subscribe(data => (dataSpecific = data));
      const req = httpMock.expectOne(`${EXPECTED_URL}/characters/${ID}`);
      req.flush(MOCK_CHARACTERS_RESULT[0]);
      expect(dataSpecific).toEqual(MOCK_CHARACTERS_RESULT[0]);
    });
  });

  describe('handleError', () => {
    it('should return an observable of undefined and print error to console', () => {
      const result = service.handleError(
        new HttpErrorResponse({ error: 'Error occurs' }),
        'test method'
      );
      expect(console.error).toHaveBeenCalled();
      result.subscribe(value => expect(value).toBeUndefined());
    });
  });
});
