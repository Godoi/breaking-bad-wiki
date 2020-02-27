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
import { ɵConsole } from '@angular/core';

let service: CharactersService;
let httpMock: HttpTestingController;
let httpTestingController: HttpTestingController;

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [CharactersService],
    imports: [HttpClientTestingModule]
  });
  httpTestingController = TestBed.get(HttpTestingController);
  service = TestBed.get(CharactersService);
  httpMock = TestBed.get(HttpTestingController);
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
    it('should limit 1 characters', done => {
      const LIMIT = 3;
      service.getLimitCharacters(LIMIT).subscribe(res => {
        expect(res).toEqual(MOCK_CHARACTERS_LIMIT);
        done();
      });
      const req = httpMock.expectOne(
        `${EXPECTED_URL}/characters?limit=${LIMIT}&offset=0`
      );
      req.flush(MOCK_CHARACTERS_LIMIT);
      httpTestingController.verify();
    });
  });

  describe('getSpecificCharacters', () => {
    it('should send a get request', () => {
      const ID = 1;
      service.getSpecificCharacters(ID).subscribe();
      const req = httpMock.expectOne(`${EXPECTED_URL}/characters/${ID}`);
      expect(req.request.method).toBe('GET');
    });
    it('should bring the character from id 1', done => {
      const ID = 1;
      service.getSpecificCharacters(ID).subscribe(item => {
        expect(item).toEqual(MOCK_CHARACTERS_RESULT[0]);
        done();
      });
      const req = httpMock.expectOne(`${EXPECTED_URL}/characters/${ID}`);
      req.flush(MOCK_CHARACTERS_RESULT[0]);
      httpTestingController.verify();
    });
  });
});
