import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SignUpPageComponent } from './signup/signup-page.component';
import { SignUpFormComponent } from './signup/signup-form.component';

// Routes
import { userRoutes } from './user.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignUpSuccessComponent } from './signup/signup-succes.component';

@NgModule({
  declarations: [
    SignUpPageComponent,
    SignUpFormComponent,
    SignUpSuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule
  ],
  exports: [],
  providers: [],
})
export class UserModule {}
