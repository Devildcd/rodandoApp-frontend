import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ReusableModalComponent } from 'src/app/components/reusable-modal/reusable-modal.component';
import { IonContent, IonCard, IonCardContent, IonIcon, IonButton, IonChip, IonLabel } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import DriverArrivingComponent  from '../../trip-progress/trip-driver-arriving/driver-arriving.component';

export interface ServiceType {
  value: string;
  icon: string;
  label: string;
  img: string; // ruta a la imagen circular
  eta?: string;
}

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
  standalone: true,
  imports: [IonLabel, IonChip, IonButton, IonIcon, IonCardContent, IonCard, IonContent, ReusableModalComponent, CommonModule],
})
export class TripDetailsComponent implements OnInit {
  @ViewChild('tripDetail', { static: true })
  private tripDetail!: ReusableModalComponent;

  @ViewChild('driverModal', { static: true })
  private driverModal!: ReusableModalComponent;

  originAddress = 'Calle Falsa 123';
  destinationAddress = 'Av. Siempre Viva 742';
  distance = 5.4;      // en kilómetros
  duration = 12;       // en minutos

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit(): void {
  }
  open() {
    this.tripDetail.open();
  }

   async openDriverArriving() {
    await this.modalCtrl.dismiss();
    this.router.navigate(['trip-progress/driver-arriving']);
    }

  serviceTypes: ServiceType[] = [
    {
      value: 'standard',
      icon: 'trophy-outline',
      label: 'Estándar',
      img: '/assets/images/standar.png',
      eta: '2 min'
    },
    {
      value: 'comfort',
      icon: 'star-outline',
      label: 'Confort',
      img: '/assets/images/confort.png',
      eta: '2 min'
    },
    {
      value: 'premium',
      icon: 'diamond-outline',
      label: 'Premium',
      img: '/assets/images/premium.png',
      eta: '2 min'
    },
  ];

  selectedType = 'standard';

  selectType(type: ServiceType) {
    this.selectedType = type.value;
    // aquí tu lógica de cambio de tipo…
  }

  selectedService = 'standard';

  vehicleTypes = [
    { value: 'motor', icon: 'bicycle-outline', label: 'Motor' },
    { value: 'auto', icon: 'car-outline', label: 'Auto' },
    { value: 'van', icon: 'bus-outline', label: 'Van' },
    { value: 'bus', icon: 'help-circle-outline', label: 'Bus' }
  ];

  selectedVehicle = this.vehicleTypes[1].value; // por defecto “auto”

  selectVehicle(value: string) {
    this.selectedVehicle = value;
    // tu lógica al cambiar vehículo…
  }

}
