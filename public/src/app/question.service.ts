import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Question } from './question';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  createQuestion(newQuestion: Question, callback): Subscription {
    return this._http.post('/questions', newQuestion).subscribe(
      res => callback(res.json()),
      err => console.error(err)
    );
    // return this._http.post('/questions', newQuestion).map(
    //   res => res.json());
  }

  getRandomQuestions(num: number, callback): Subscription {
    return this._http.get(`/questions/random/${num}`).subscribe(
      res => callback(res.json()),
      err => console.error(err)
    );
  }

}
