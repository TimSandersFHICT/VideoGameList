import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GameService {

  constructor(private http: HttpClient) { }

  // Uses http.get() to load data from a single API endpoint
  getGames() {
    return this.http.get('http://localhost:8105/api/game/all');
}

// send a POST request to the API to create a new data object
createGame(game) {
    const body = JSON.stringify(game);
    return this.http.post('', body, httpOptions);
}

// send a PUT request to the API to update a data object
updateGame(game) {
    const body = JSON.stringify(game);
    return this.http.put('' + game.id, body, httpOptions);
}

// send a DELETE request to the API to delete a data object
deleteGame(game) {
    return this.http.delete('' + game.id);
}
}
