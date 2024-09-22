import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'anime/:id',
    loadComponent: () => import('./pages/anime-detail/anime-detail.page').then( m => m.AnimeDetailPage)
  },
];
