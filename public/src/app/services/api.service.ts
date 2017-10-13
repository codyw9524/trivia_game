import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { ApiRequest } from '../models/apirequest';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable()
export class ApiService {
  questions: Question[] = [];

  constructor(private _http: Http) { }

  getCategories(callback) {
    return this._http.get('https://opentdb.com/api_category.php').subscribe(
      res => callback(res.json()),
      err => console.error(err)
    );
  }

  getQuestionsFromService(): Question[] {
    return this.questions;
  }

  getQuestionsFromAPI(apiRequest: ApiRequest, category_ids: number[], callback) {
    this.questions = [];
    let url = 'https://opentdb.com/api.php?';
    if (apiRequest.num_of_questions === '0') {
      apiRequest.num_of_questions = '5';
    }
    url += `amount=${apiRequest.num_of_questions}`;
    if (apiRequest.category !== '0') {
      if (apiRequest.category === '-1') {
        const random_index = Math.floor(Math.random() * category_ids.length);
        url += `&category=${random_index}`;
      } else {
        url += `&category=${apiRequest.category}`;
      }
    }
    if (apiRequest.difficulty !== '0') {
      url += `&difficulty=${apiRequest.difficulty}`;
    }
    return this._http.get(url).subscribe(
      res => {
        const results = res.json().results;
        for (const trivia of results) {
          const fromAPI = true;
          const question = new Question(fromAPI);
          question.question = trivia.question;
          question.answers.push(new Answer(true, trivia.correct_answer));
          for (const answer of trivia.incorrect_answers) {
            question.answers.push(new Answer(false, answer));
          }
          this.questions.push(question);
        }
        callback();
      },
      err => console.error(err)
    );
  }

}
