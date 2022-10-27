import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loading: any;

  constructor(private http: HttpClient) { }

  getMovie(page = 1): Observable<any> {
    return this.http.get(`${environment.url}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }

  getMovieDetails(id: string) {
    return this.http.get(`${environment.url}/movie/${id}?api_key=${environment.apiKey}`);
  }

  async loaderInit(){

  }

  loaderDestroy(){
  }
}
