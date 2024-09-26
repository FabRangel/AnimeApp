import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonGrid, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { addIcons } from 'ionicons';
import { arrowBack, close, heart, heartOutline, searchCircleOutline } from 'ionicons/icons';
import { AnimeService } from '../services/anime.service';
import { CardAnimeComponent } from '../components/card-anime/card-anime.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonText, CardAnimeComponent,IonCol, IonRow, IonGrid, IonSearchbar,
    ToolbarComponent,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {
  encontrados:any[] = [];
  sinData = false;
  constructor(private animeS: AnimeService) {
    addIcons({searchCircleOutline,close, arrowBack,heartOutline,heart});
  }
  buscar(evento:any){
    this.sinData = true;
    console.log(evento.detail.value);
    this.animeS.searchAnime(evento.detail.value).subscribe((resp:any) =>{
      console.log(resp);
      this.encontrados = resp.data;
    })
  }
}
