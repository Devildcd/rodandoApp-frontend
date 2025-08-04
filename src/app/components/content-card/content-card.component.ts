import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { IonCardContent, IonCard, IonIcon, IonInput, IonButton, IonLabel, IonList, IonItem, IonActionSheet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonIcon, IonInput, IonButton, IonLabel, IonList, IonItem, IonActionSheet, CommonModule],
})
export class ContentCardComponent  implements OnInit {
 @Input() contentTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit() {}

}
