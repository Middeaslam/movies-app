import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=125ea7918283e3e7dafdfbf161937dda')
  }
}
