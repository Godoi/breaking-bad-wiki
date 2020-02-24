import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, filter, map } from 'rxjs/operators';
import { IEpisodes } from '../shared/model/episodes';

const API_URL = 'https://breakingbadapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  constructor(private http: HttpClient) {}

  getAllEpisodes(): Observable<IEpisodes> {
    const url = `${API_URL}/episodes`;
    return this.http
      .get<IEpisodes>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getSpecificEpisode(id: number): Observable<IEpisodes> {
    const url = `${API_URL}/episodes/${id}`;
    return this.http
      .get<IEpisodes>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getEpisodeBySeason(season: string): Observable<IEpisodes> {
    const url = `${API_URL}/episodes`;
    return this.http.get<IEpisodes>(url).pipe(
      filter(item => item.season === season),
      catchError(this.handleError)
    );
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
