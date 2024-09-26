import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-card-anime',
  standalone:true,
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss'],
  imports:[IonicModule]
})
export class CardAnimeComponent  implements OnInit {
  @Input() anime:any;
  constructor(private route:Router, private favoriteS: FavoritesService) { }

  verDetalles(id:string){
    console.log('verDetalles',id);
    this.route.navigateByUrl('/anime/'+ id);
  }

  addToFavorites(anime:any){
    this.favoriteS.addFavorite(anime);
  }
  
  ngOnInit() {}

}
