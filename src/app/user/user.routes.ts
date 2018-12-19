import { Routes } from '@angular/router';

// Components
import { SignUpPageComponent } from './signup/signup-page.component';
import { SignUpSuccessComponent } from './signup/signup-succes.component';


export const userRoutes: Routes = [
  {
    path: 'sign-up',
    component: SignUpPageComponent
  },
  {
    path: 'sign-up/success',
    component: SignUpSuccessComponent
  }
];
