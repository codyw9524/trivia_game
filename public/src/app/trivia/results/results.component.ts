import { GameResult } from './../../models/game-result';
import { ResultService } from './../../services/result.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: GameResult[];

  constructor(
    private _resultService: ResultService
  ) { }

  ngOnInit() {
    this.getResults();
  }

  getResults(): void {
    this._resultService.getResults((results) => this.results = results);
  }

}
