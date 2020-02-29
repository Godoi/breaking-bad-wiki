import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ICharacters } from '../shared/model/characters';

const API_URL = 'https://breakingbadapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<ICharacters> {
    const url = `${API_URL}/characters`;
    return this.http.get<ICharacters>(url).pipe(
      retry(1),
      catchError(err => this.handleError(err, 'getAllCharacters'))
    );
  }

  getLimitCharacters(limit: number): Observable<ICharacters> {
    if (!limit) {
      return null;
    }
    const url = `${API_URL}/characters?limit=${limit}&offset=0`;
    return this.http.get<ICharacters>(url).pipe(
      retry(1),
      catchError(err => this.handleError(err, 'getLimitCharacters'))
    );
  }

  getSpecificCharacters(id: number): Observable<ICharacters> {
    if (!id) {
      return null;
    }
    const url = `${API_URL}/characters/${id}`;
    return this.http.get<ICharacters>(url).pipe(
      retry(1),
      catchError(err => this.handleError(err, 'getSpecificCharacters'))
    );
  }

  handleError(error: HttpErrorResponse, methodName: string): Observable<any> {
    console.error(`${methodName} failed due to ${error.message}`);
    return of(undefined);
  }
}
