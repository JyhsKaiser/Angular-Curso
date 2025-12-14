import { Routes } from '@angular/router';

import { Counter } from './pages/counter/Counter';
import { HeroPage } from './pages/hero-page/hero-page';
import { NotFound } from './pages/not-found/not-found';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page/dragonball-super-page';
export const routes: Routes = [
  {
    path: '',      // Ruta raíz que carga el componente App
    component: Counter,
  },
  {
    path: 'hero',
    component: HeroPage,
  },
  {
    path: 'dragonball',
    component: DragonballPage,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPage,
  },
  { path: '**', redirectTo: '' } // Ruta comodín para manejar rutas no encontradas

];
