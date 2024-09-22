import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  standalone:true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports:[IonicModule]
})
export class ToolbarComponent  implements OnInit {
  @Input() title!: string;
  constructor() { }

  ngOnInit() {}

}
