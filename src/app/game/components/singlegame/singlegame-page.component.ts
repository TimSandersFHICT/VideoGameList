import { LoginModalComponent } from './../../../user/login/login-modal.component';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-overview-page',
    template: `
    <div class="card" style="width: 25rem;">
    <img class="card-img-top" src="{{game?.imageLink}}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{game?.title}}</h5>
      <h6 class="card-title">Game Summary:</h6>
      <p class="card-text">{{game?.summary}}</p>
      <h6 class="card-title">Rating:</h6>
      <p class="card-text">{{game?.rating}}</p>
      <h6 class="card-title">Price:</h6>
      <p class="card-text">€{{game?.price}}</p>
      <h6 class="card-title">Genre:</h6>
      <p class="card-text">{{game?.genre.name}}</p>
      <h6 class="card-title">Developer:</h6>
      <p class="card-text">{{game?.developer.name}}</p>
      <a [routerLink]="['/game/overview/']"  class="btn btn-primary">Go back</a>
    </div>
  </div>
  <div class="nav-item" *ngIf="afAuth?.user | async as user">
  <div class="card" style="width: 25rem;">
  <div class="card-body">
          <h6 class="card-title">Favorite the games you wish to purchase!</h6>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
            <p>No</p>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
            <label class="form-check-label" for="exampleRadios2">
              <p>Yes</p>
            </label>
          </div>
        </div>
      </div>
    </div>
    `,
    styles: [`
      .purple-bg {
        background: #eee9f6;
      }
      .img-fluid {
        width: 100%;
        height: 350px;
        object-fit: cover;
    }
    .card {
      margin: 0 auto; /* Added */
      float: none; /* Added */
      margin-bottom: 10px; /* Added */
}
    `]
})
export class SingleGamePageComponent implements OnInit {
  game: any;
  id: string;
  constructor(private _gameService: GameService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getGame();

  }

  getGame() {
    this._gameService.getGame(this.id).subscribe(
      data => {console.log(data);
      this.game = data; },
      err => console.error(err),
      () => console.log('done loading games')
    );
  }
}
