import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
    return this.http
      .get<ICharacters>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getLimitCharacters(limit: number): Observable<ICharacters> {
    const url = `${API_URL}/characters?limit=${limit}&offset=0`;
    return this.http
      .get<ICharacters>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getSpecificCharacters(id: number): Observable<ICharacters> {
    const url = `${API_URL}/characters/${id}`;
    return this.http
      .get<ICharacters>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getByNameCharacters(name: string): Observable<ICharacters> {
    const url = `${API_URL}/characters?name${name}`;
    return this.http
      .get<ICharacters>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.warn(errorMessage);
    return throwError(errorMessage);
  }
}
