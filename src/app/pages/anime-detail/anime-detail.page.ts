import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
  IonIcon,
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonSegment,
  IonSegmentButton, IonList, IonAvatar, IonItem } from '@ionic/angular/standalone';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { addIcons } from 'ionicons';
import { star, tvSharp } from 'ionicons/icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.page.html',
  styleUrls: ['./anime-detail.page.scss'],
  standalone: true,
  imports: [IonItem, IonAvatar, IonList, 
    IonSegmentButton,
    IonSegment,
    IonChip,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCard,
    IonIcon,
    IonLabel,
    IonGrid,
    IonCol,
    IonRow,
    ToolbarComponent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class AnimeDetailPage implements OnInit {
  miAnime: any = {};
  safeUrl: SafeResourceUrl | null = null;
  segmentValue: string = 'informacion';
  personajes:any[] = [];

  constructor(
    private actRoute: ActivatedRoute,
    private animeS: AnimeService,
    private sanitizer: DomSanitizer
  ) {
    this.actRoute.params.subscribe((params: any) => {
      console.log(params.id);
      this.animeS.getAnimeById(params.id).subscribe((anime: any) => {
        console.log(anime.data);
        this.miAnime = anime.data;
        if (this.miAnime?.trailer?.embed_url) {
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.miAnime.trailer.embed_url
          );
        }
      });
      this.getCharacters(params.id);
    });
    addIcons({ star, tvSharp });
  }

  getCharacters(id: string) {
    this.animeS.getCharactersById(id).subscribe((personajes:any) => {
      console.log(personajes);
      this.personajes = personajes.data;
      this.personajes = this.personajes.slice(0,19);//Slice corta
      console.log(this.personajes);
    });
  }

  ngOnInit() {}
}
