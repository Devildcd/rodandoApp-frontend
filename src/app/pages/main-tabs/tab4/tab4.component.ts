import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonAvatar, IonCard, IonCardContent, IonList, IonItem, IonIcon, IonLabel } from "@ionic/angular/standalone";
import { DinamicHeaderComponent } from "src/app/components/dinamic-header/dinamic-header.component";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonItem, IonList, IonCardContent, IonCard, IonAvatar, IonButton, IonContent, DinamicHeaderComponent],
})
export default class Tab4Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
