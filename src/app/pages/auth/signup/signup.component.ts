import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonItem, IonSegment, IonIcon, IonButton, IonSegmentButton, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [IonLabel, IonSegmentButton, IonButton, IonIcon, IonSegment, IonItem, IonInput, FormsModule, CommonModule],
})
export default class SignupComponent  implements OnInit {
  contactMethod = 'email';
  
  constructor() { }

  ngOnInit() {}

}
