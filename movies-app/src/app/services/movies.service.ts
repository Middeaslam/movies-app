import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, switchMap, of } from 'rxjs';
import { MovieDto } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '125ea7918283e3e7dafdfbf161937dda';

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap(res => {
        return of(res.results.slice(0, count))
      })
    )
  }
}
