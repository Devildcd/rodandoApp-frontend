import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ReusableModalComponent } from "../reusable-modal/reusable-modal.component";
import { IonContent, IonCard, IonCardContent, IonIcon, IonButton, IonChip, IonLabel } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { DriverInfoModalComponent } from "../driver-info-modal/driver-info-modal.component";
import { ModalController } from '@ionic/angular';

export interface ServiceType {
  value: string;
  icon: string;
  label: string;
  img: string; // ruta a la imagen circular
}

interface PaymentMethod {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-detail-trip-modal',
  templateUrl: './detail-trip-modal.component.html',
  styleUrls: ['./detail-trip-modal.component.scss'],
  standalone: true,
  imports: [IonLabel, IonChip, IonButton, IonIcon, IonCardContent, IonCard, IonContent, ReusableModalComponent, CommonModule, DriverInfoModalComponent],
})
export class DetailTripModalComponent {
 @ViewChild('detailTripModal', { static: true })
  private detailTripModal!: ReusableModalComponent;

  @ViewChild('driverModal', { static: true })
  private driverModal!: ReusableModalComponent;

  originAddress = 'Calle Falsa 123';
  destinationAddress = 'Av. Siempre Viva 742';
  distance = 5.4;      // en kilómetros
  duration = 12;       // en minutos

   constructor(private modalCtrl: ModalController) {}

  open() {
    this.detailTripModal.present();
  }

  openDriverInfo() {
    // Opcional: cerrar primero el detalle
    this.detailTripModal.dismiss()
      .then(() => this.driverModal.present());
  }

  services = [
    {
      value: 'standard',
      label: 'Standard',
      img: 'assets/standard-car.png',
      price: '$27.2',
      eta: '5 min'
    },
    {
      value: 'comfort',
      label: 'Comfort',
      img: 'assets/comfort-car.png',
      price: '$32.4',
      eta: '3 min'
    },
    {
      value: 'business',
      label: 'Business',
      img: 'assets/business-car.png',
      price: '$49.9',
      eta: '2 min'
    }
  ];

  serviceTypes: ServiceType[] = [
    {
      value: 'standard',
      icon: 'car-outline',
      label: 'Estándar',
      img: '/assets/images/standar.png',
    },
    {
      value: 'comfort',
      icon: 'car-sport-outline',
      label: 'Confort',
      img: '/assets/images/confort.png',
    },
    {
      value: 'premium',
      icon: 'star-outline',
      label: 'Premium',
      img: '/assets/images/premium.png',
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
