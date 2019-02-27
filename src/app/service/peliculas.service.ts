import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = 'b1ed4db97cf35427f28e3b022ad3f31a';
  private urlMovieDb: string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

  getMovies(){
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}`;
    return this.http.get( url )
    .pipe(map( res => { return res }));
  }

  getMovie(id: string){
    let url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apikey}`;
    return this.http.get(url).pipe(map( result => result));
  }

  getMoviesKids(){
    let url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}`;
    return this.http.get( url )
    .pipe(map( res => { return res }));
  }

  getMoviesYear(){
    let url = `${this.urlMovieDb}/discover/movie?primary_release_year=2019&sort_by=vote_average.desc&sort_by=popularity.desc&api_key=${this.apikey}`;
    return this.http.get( url )
    .pipe(map( res => { return res }));
  }
  
  getSearch(textSearch: string){
    let url = `${this.urlMovieDb}/search/movie?sort_by=vote_average.desc&query=${textSearch}&page=1&include_adult=false&api_key=${this.apikey}`;
    return this.http.get( url )
    .pipe(map( res => { return res }));
  }

}
