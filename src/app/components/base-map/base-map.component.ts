import { style } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { GoogleMapsModule } from '@angular/google-maps';
import { IonSpinner } from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-base-map',
  templateUrl: './base-map.component.html',
  styleUrls: ['./base-map.component.scss'],
  standalone: true,
  imports: [GoogleMapsModule, IonSpinner],
})
export class BaseMapComponent implements OnInit {
   @Input() height: string | number = '400px';
  @Input() width:  string | number = '100%';
  @HostBinding('style.height') get hostHeight() { return this.normalize(this.height); }
  @HostBinding('style.width')  get hostWidth()  { return this.normalize(this.width);  }
  // Configuración del mapa
  center = {
    lat: 20.0217,   // Latitud (Norte positivo)
    lng: -75.8294   // Longitud (Oeste negativo)
  };
  zoom = 14;

  // Opciones del mapa incluyendo la API key
  mapOptions = {
    apiKey: environment.googleMapsApiKey,
    disableDefaultUI: true,
    gestureHandling: 'greedy',
    clickableIcons: true
  };

  private normalize(v: string|number): string {
    // Si es número, lo interpretamos como px
    return typeof v === 'number' ? `${v}px` : v;
  }

  // Flag para controlar si el script está cargado
  isGoogleMapsLoaded = false;

  constructor() { }

  ngOnInit() {
    this.loadGoogleMapsScript();
  }

  private loadGoogleMapsScript(): void {
    // Verificar si Google Maps ya está cargado
    if (typeof google !== 'undefined' && google.maps) {
      this.isGoogleMapsLoaded = true;
      return;
    }

    // Verificar si el script ya está en el DOM
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      // Si el script existe, esperar a que se cargue
      existingScript.addEventListener('load', () => {
        this.isGoogleMapsLoaded = true;
      });
      return;
    }

    // Crear y cargar el script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      this.isGoogleMapsLoaded = true;
      console.log('Google Maps script loaded successfully');
    };

    script.onerror = () => {
      console.error('Failed to load Google Maps script');
    };

    document.head.appendChild(script);
  }
}
