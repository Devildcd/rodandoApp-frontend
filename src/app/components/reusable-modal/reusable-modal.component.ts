import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { IonModal, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reusable-modal',
  templateUrl: './reusable-modal.component.html',
  styleUrls: ['./reusable-modal.component.scss'],
  standalone: true,
  imports: [IonModal, IonContent]
})
export class ReusableModalComponent  implements OnInit {
 @ViewChild('modal', { static: true, read: ElementRef })
   private modalRef!: ElementRef<HTMLIonModalElement>;
  @Input() initialBreakpoint = 0.4;
   @Input() breakpoints = [0, 0.4, 0.8];
   @Input() presentingElement?: HTMLElement;
   @Input() cssClass?: string;
 
   ngOnInit() {
     // Opcional: lógica previa
   }
 
    /** Llama a esto para mostrar el modal */
   async present(): Promise<void> {
     await this.modalRef.nativeElement.present();
   }
 
   /** Cierra el modal (puedes pasar data opcional) */
   async dismiss(data?: any): Promise<void> {
     await this.modalRef.nativeElement.dismiss(data);
   }
 

}
