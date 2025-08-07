import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.component'),
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/auth/auth.routes'),
      },
    ]
  },
  {
    path: 'trip',
    loadComponent: () => import('./pages/trip/trip.component'),
  },
  {
    path: 'trip-progress',
    loadComponent: () => import('./pages/trip-progress/trip-progress.component'),
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/trip-progress/trip-progress.routes'),
      },
    ]
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/main-tabs/main-tabs.component'),
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/main-tabs/main-tabs.routes'),
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
