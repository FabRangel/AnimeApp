import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { addIcons } from 'ionicons';
import { arrowBack, close, searchCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonSearchbar,
    ToolbarComponent,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {
    addIcons({searchCircleOutline,close, arrowBack});
  }
  buscar(evento:any){
    console.log(evento);
  }
}
