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

// Routing
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainLayoutComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
