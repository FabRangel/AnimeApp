import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { CardAnimeComponent } from '../components/card-anime/card-anime.component';
import { AnimeService } from '../services/anime.service';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, CardAnimeComponent,ToolbarComponent],
})
export class Tab1Page {
  listaAnimes:any[] = [];
  load=false;
  constructor(private animeS: AnimeService) {
    addIcons({heart,heartOutline})
    this.animeS.getTopAnimes().subscribe( (response:any) => {
      console.log(response.data);
      if(response){
        this.load = true;
        this.listaAnimes = response.data;
      }
    });
  }
}
