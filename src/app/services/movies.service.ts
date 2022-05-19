import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class moviesService {

  private urlBase = 'https://movies-app1.p.rapidapi.com/api';
  private headers = {
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
    'X-RapidAPI-Key': 'e8c5750b43msha7ed56d3ebd9520p173f88jsn562fca3360ed'
  };

  constructor(private http: HttpClient) { }

  buscarPeliculas(titulo: string): Observable<any> {
    return this.http.get(this.urlBase + '/movies', 
    {headers: this.headers, params: {query: titulo}})
    .pipe(map((resp: any)=> resp.results))
  }

  buscarPeliculaPorId(movieId: string): Observable<any> {
    return this.http.get(this.urlBase + '/movie' + '/' + movieId, 
    {
      headers: this.headers
    })
    .pipe(map((resp: any)=> resp.result))
  }
}
