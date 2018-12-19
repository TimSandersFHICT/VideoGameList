import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 3rd party
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import { NavbarComponent } from './core/common/navbar.component';
import { MainLayoutComponent } from './core/layouts/main-layout.component';
import { HomePageComponent } from './core/home/home-page.component';
import { AppComponent } from './app.component';

// Modules
import { UserModule } from './user/user.module';

// Routing
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { LoginFormComponent} from './user/login/login-form.component';
import { LoginModalComponent } from './user/login/login-modal.component';
import { RecoveryFormComponent } from './user/recovery/recovery-form.component';

// Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './core/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainLayoutComponent,
    HomePageComponent,
    LoginModalComponent,
    LoginFormComponent,
    RecoveryFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginModalComponent
  ]
})
export class AppModule { }
