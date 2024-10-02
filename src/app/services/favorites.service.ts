import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: any = [];
  constructor() { 
    this.getLocalFavorites;
  }
  get getLocalFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return this.favorites;
  }
  inFavorite(id: any){
    return !!this.favorites.find((a: any) => a.mal_id === id);
  }
  addFavorite(anime: any) {
    const found = this.favorites.find((a:any) => a.mal_id === anime.mal_id);
    console.log(found);
    if (found) {
      this.favorites = this.favorites.filter((a:any) => a.mal_id !== found.mal_id);
      console.log(this.favorites);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      return;
    }
    this.favorites.push(anime);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
  
}
