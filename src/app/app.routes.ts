import { Routes } from '@angular/router';

// components
import { HomePageComponent } from './core/home/home-page.component';
import { MainLayoutComponent } from './core/layouts/main-layout.component';

// Components

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  },
  {
    path: 'user',
    component: MainLayoutComponent,
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'game',
    component: MainLayoutComponent,
    loadChildren: './game/game.module#GameModule'
  },
];
