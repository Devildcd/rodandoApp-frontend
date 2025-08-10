import { Component, OnInit } from '@angular/core';
import { IonCard, IonContent, IonCardContent, IonItem, IonInput, IonIcon, IonButton, IonText, IonSegmentButton, IonLabel, IonSegment } from "@ionic/angular/standalone";
import { ContentCardComponent } from "src/app/components/content-card/content-card.component";
import AuthComponent from "../auth.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonSegment, IonLabel, IonSegmentButton, IonText, IonButton, IonIcon, IonInput, IonItem, IonCardContent, IonCard, IonContent, ContentCardComponent, AuthComponent],
})
export default class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
