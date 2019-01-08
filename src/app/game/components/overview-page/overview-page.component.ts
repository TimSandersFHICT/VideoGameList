import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  styles: [`
  .card-img-top {
    position: relative;
    float: center;
    width:  250px;
    height: 150px;
    background-repeat:   no-repeat;
    background-size:     cover;
  }`],
  template: `
  <div class ="row">
    <div class="card col-4" *ngFor="let game of games">
      <div class="mr-3">
      <p style="text-align:center;"><img class="card-img-top" src="{{game.imageLink}}"></p>
        <div class="card-body">
          <h5 class="card-title">{{game.title}}</h5>
          <h5 class="card-title">Summary:</h5>
          <p class="card-text">{{game.summary}}</p>
          <a [routerLink]="['/game/', game.id]"  class="btn btn-primary">More details</a>
        </div>
      </div>
    </div>
  </div>

  `
})
export class OverviewPageComponent implements OnInit {
  public games;

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this._gameService.getGames().subscribe(
      // the first argument is a function which runs on success
      data => {console.log(data);
         this.games = data; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading games')
    );
  }
}
