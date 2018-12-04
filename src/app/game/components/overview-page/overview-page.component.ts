import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  template: `
  <div class ="row">
    <div class="card col-4" *ngFor="let game of games">
      <div class="mr-3">
        <img class="card-img-top" src={{game.image_link}} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Title:</h5>
          <p class="card-text">{{game.title}}</p>
          <h5 class="card-title">Summary:</h5>
          <p class="card-text">{{game.summary}}</p>
          <h5 class="card-title">Price:</h5>
          <p class="card-text">{{game.price}}</p>
          <h5 class="card-title">Developer:</h5>
          <p class="card-text">{{game.developer.name}}</p>
          <a href="/game/overview/id" class="btn btn-primary">More details</a>
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
