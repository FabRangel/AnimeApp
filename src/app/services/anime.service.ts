import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const APIURL = 'https://api.jikan.moe/v4/';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  getTopAnimes(){
    return this.http.get(`${APIURL}top/anime`);
  }
  
  getAnimeById(id:string){
    return this.http.get(`${APIURL}anime/${id}`);
  }

  getCharactersById(id:string){
    return this.http.get(`${APIURL}anime/${id}/characters`);
  }

  searchAnime(valor: string){
    return this.http.get(`${APIURL}anime?q=${valor}`);
  }
  
}
