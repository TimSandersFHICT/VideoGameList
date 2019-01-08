import { CreateGamePageComponent } from './components/creategame/creategame-page.component';
import { SingleGamePageComponent } from './components/singlegame/singlegame-page.component';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { Routes } from '@angular/router';



export const gameRoutes: Routes = [
  {
    path: 'overview',
    component: OverviewPageComponent
  },
  {
    path: 'new',
    component: CreateGamePageComponent
  },
  {
    path: ':id',
    component: SingleGamePageComponent
  }
];
