import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil - GSC',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Accueil - GSC',
    component: Home,
  },
  {
    path: 'gsc-about',
    title: 'À propos - GSC',
    loadComponent: () =>
      import('../app/pages/gsc/about/about').then((m) => m.About),
  },
  {
    path: 'gsc-equipe',
    title: 'Notre Équipe - GSC',
    loadComponent: () =>
      import('../app/pages/gsc/equipe/equipe').then((m) => m.Equipe),
  },
  {
    path: 'gsc-rendezvous',
    title: 'Rendez-vous - GSC',
    loadComponent: () =>
      import('../app/pages/gsc/rendezvous/rendezvous').then((m) => m.Rendezvous),
  },
  {
    path: 'gsc-gallery',
    title: 'Notre Galerie - GSC',
    loadComponent: () =>
      import('../app/pages/gsc/gallery/gallery').then((m) => m.Gallery),
  },
  {
    path: 'services',
    title: 'Nos Services - GSC',
    loadComponent: () =>
      import('../app/pages/services/services').then((m) => m.Services),
  },
  {
    path: 'realisations',
    title: 'Nos Réalisations - GSC',
    loadComponent: () =>
      import('../app/pages/realisations/realisations').then((m) => m.Realisations),
  },
  {
    path: 'contact',
    title: 'Nous Contacter - GSC',
    loadComponent: () =>
      import('../app/pages/contact/contact').then((m) => m.Contact),
  },
];
