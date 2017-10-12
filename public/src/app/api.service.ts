import { Question } from './question';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Answer } from './answer';

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

  getQuestions(num: number, callback) {
    this.questions = [];
    return this._http.get(`https://opentdb.com/api.php?amount=${num}`).subscribe(
      res => {
        const results = res.json().results;
        for (const trivia of results) {
          const fromAPI = true;
          const question = new Question(fromAPI);
          question.question = trivia.question;
          // question.answers = [];
          question.answers.push(new Answer(true, trivia.correct_answer));
          for (const answer of trivia.incorrect_answers) {
            question.answers.push(new Answer(false, answer));
          }
          this.questions.push(question);
        }
        callback(this.questions);
      },
      err => console.error(err)
    );
  }

}
