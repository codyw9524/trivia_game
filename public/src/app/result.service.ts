import { GameResult } from './game-result';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ResultService {

  constructor(private _http: Http) { }

  getResults(callback) {
    this._http.get('/results').subscribe(
      res => callback(res.json()),
      err => console.error(err)
    );
  }

  createResults(gameResult: GameResult, callback) {
    this._http.post('/results', gameResult).subscribe(
      res => callback(res.json()),
      err => console.error(err)
    );
  }

}
