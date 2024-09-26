import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { FavoritesService } from '../services/favorites.service';
import { CardAnimeComponent } from '../components/card-anime/card-anime.component';
import { addIcons } from 'ionicons';
import { heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, ToolbarComponent,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,  CardAnimeComponent],
})
export class Tab3Page {
  favorites:any[] = [];
  constructor(private favoriteS: FavoritesService) {
    addIcons({heartOutline});
    this.favorites = this.favoriteS.getLocalFavorites();
  }
}
