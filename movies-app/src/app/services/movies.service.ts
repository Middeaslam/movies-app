import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '125ea7918283e3e7dafdfbf161937dda';

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming') {
    return this.http.get(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
  }
}
