import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import {throwError as observableThrowError, Observable} from 'rxjs';

@Component({
  selector: 'app-overview-page',
  styles: [],
  template: `
  <form>
  <div class="form-group">
    <label for="FormControlInput1">Title</label>
    <input
      type="title"
      [(ngModel)]="gametitle"
      #title="ngModel"
      class="form-control"
      required
      name="title"
      [ngClass]="{'is-invalid': title.invalid && formSubmitted }"
      placeholder="Title">
      <div *ngIf="title.invalid && (title.dirty || title.touched)" class="alert alert-danger">
        <div *ngIf="title?.errors.required">
          Title is required.
        </div>
      </div>
  </div>
  <div class="form-group">
  <label for="FormControlTextarea1">Summary</label>
  <input
      type="summary"
      [(ngModel)]="gamesummary"
      #summary="ngModel"
      class="form-control"
      required
      name="summary"
      [ngClass]="{'is-invalid': summary.invalid && formSubmitted }"
      placeholder="Summary">
      <div *ngIf="summary.invalid && (summary.dirty || summary.touched)" class="alert alert-danger">
        <div *ngIf="summary?.errors.required">
          Summary is required.
        </div>
      </div>
</div>
<div class="form-group">
<label for="FormControlInput2">Price</label>
<input
      type="price"
      [(ngModel)]="gameprice"
      #price="ngModel"
      class="form-control"
      required
      name="price"
      [ngClass]="{'is-invalid': price.invalid && formSubmitted }"
      placeholder="Price">
      <div *ngIf="price.invalid && (price.dirty || price.touched)" class="alert alert-danger">
        <div *ngIf="price?.errors.required">
          Price is required.
        </div>
      </div>
</div>
<div class="form-group">
<label for="FormControlInput3">Date</label>
<input
      type="date"
      [(ngModel)]="gamereleasedate"
      #releasedate="ngModel"
      class="form-control"
      required
      name="releasedate"
      [ngClass]="{'is-invalid': releasedate.invalid && formSubmitted }"
      placeholder="ReleaseDate">
      <div *ngIf="releasedate.invalid && (releasedate.dirty || releasedate.touched)" class="alert alert-danger">
        <div *ngIf="releasedate?.errors.required">
          Release Date is required.
        </div>
      </div>
</div>
  <div class="form-group">
    <label for="FormControlSelect1">Rating</label>
    <select [(ngModel)]="gamerating"  #rating="ngModel" class="form-control" id="FormControlSelect1" name="rating" required>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
<label for="FormControlInput4">Image link</label>
<input
      [(ngModel)]="gameimagelink"
      #imagelink="ngModel"
      class="form-control"
      required
      name="imagelink"
      [ngClass]="{'is-invalid': imagelink.invalid && formSubmitted }"
      placeholder="ImageLink">
      <div *ngIf="imagelink.invalid && (imagelink.dirty || imagelink.touched)" class="alert alert-danger">
        <div *ngIf="imagelink?.errors.required">
          Image Link is required.
        </div>
      </div>
</div>
<div class="form-group">
    <label for="FormControlSelect2">Genres</label>
    <br>
    <select [(ngModel)]="genre" name="genre">
    <option *ngFor="let genre of genres" [ngValue]="genre.id">{{genre.name}}</option>
  </select>
  </div>
  <div class="form-group">
    <label for="FormControlSelect3">Developers</label>
    <br>
    <select [(ngModel)]="developer" name="developer">
  <option *ngFor="let developer of developers" [ngValue]="developer.id">{{developer.name}}</option>
</select>
  </div>
<button name="CreateButton" type (click)="createGame(
  gametitle,  gamesummary,  gameprice,  gamereleasedate,  gamerating, gameimagelink, developer, genre)" class="btn btn-primary">
Create game!</button>
</form>

`
})
export class CreateGamePageComponent implements OnInit {
  public gametitle;
  public gamesummary;
  public gameprice;
  public gamereleasedate;
  public gamerating;
  public gameimagelink;
  public developers;
  public developer;
  public genres;
  public genre;
  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
    this.getGenres();
    this.getDevelopers();
  }

  createGame(title, summary, price, releasedate, rating, imagelink, developer, genre) {

    const game = {title: title, summary: summary, price: price, releasedate: releasedate, rating: rating, imagelink: imagelink,
       developer: developer, genre: genre};

    console.log(game);
    this._gameService.createGame(game).subscribe(
       data => {

         return true;
       },
       error => {
         console.error('error while creating game');
         return observableThrowError(error);
       }
    );
  }

  getGenres() {
    this._gameService.getGenres().subscribe(
      // the first argument is a function which runs on success
      data => {console.log(data);
         this.genres = data; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading games')
    );
  }

  getDevelopers() {
    this._gameService.getDevelopers().subscribe(
      // the first argument is a function which runs on success
      data => {console.log(data);
         this.developers = data; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading games')
    );
  }
}
