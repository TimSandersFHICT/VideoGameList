import { GameService } from './services/game.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// Routes
import { gameRoutes } from './game.routes';
import { RouterModule } from '@angular/router';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';

@NgModule({
  declarations: [
    OverviewPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(gameRoutes),
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  providers: [GameService],
})
export class GameModule { }