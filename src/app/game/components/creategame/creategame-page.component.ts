import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import {throwError as observableThrowError, Observable} from 'rxjs';

@Component({
  selector: 'app-overview-page',
  styles: [],
  template: `
  <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
  `
})
export class CreateGamePageComponent implements OnInit {
  public games;
  public genre_name;
  public developer_name;
  public developer_address;
  public developer_numemployees;
  public developer_datefounded;
  constructor(private _gameService: GameService) { }

  ngOnInit(): void {

  }

  createGame(title, summary, price, releasedate, rating, imagelink) {

    const developer = this.createDeveloper(this.developer_name, this.developer_address, this.developer_numemployees,
      this.developer_datefounded);

    const genre = this.createGenre(this.genre_name);

    const game = {title: title, summary: summary, price: price, releasedate: releasedate, rating: rating, imagelink: imagelink,
       developer, genre};

    console.log(game);
    this._gameService.createGame(game).subscribe(
       data => {

         return true;
       },
       error => {
         console.error('error while creating house');
         return observableThrowError(error);
       }
    );
  }

  createGenre(name) {
    const genre = {name: name};
    return genre;
  }

  createDeveloper(name, address, numemployees, datefounded) {
    const genre = {name: name, address: address, numemployees: numemployees, datefounded: datefounded};
    return genre;
  }

}
