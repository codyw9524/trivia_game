import { ApiService } from './../../api.service';
import { ResultService } from './../../result.service';
import { GameResult } from './../../game-result';
import { Router } from '@angular/router';
import { QuestionService } from './../../question.service';
import { UserService } from './../../user.service';
import { Question } from './../../question';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  currentUser: User = new User();
  questions: Question[];
  gameData: any = { answers: [] };
  errors: string[] = [];

  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private _resultService: ResultService,
    private _apiService: ApiService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.validateSession();
    this.getQuestionsFromService();
    // this.getRandomQuestions();
    // this.getQuestionsFromAPI();
  }

  onSubmit() {
    const correctAnswers = this.gameData.answers.filter((answer) => answer.correct === true).length;
    const totalAnswers = this.gameData.answers.length;
    const gameResult = new GameResult(correctAnswers, totalAnswers, this.currentUser._id);
    this._resultService.createResults(gameResult, (result) => {
      console.log('result: ', result);
      if (result.errors) {
        for (const key of Object.keys(result.errors)) {
          const error = result.errors[key];
          this.errors.push(error.message);
        }
      } else {
        this._router.navigateByUrl('/trivia');
      }
    });
  }

  getCurrentUser(): void {
    this.currentUser = this._userService.getCurrentUser();
    console.log('current user: ', this.currentUser);
  }

  validateSession(): void {
    if (!this.currentUser) {
      this._router.navigateByUrl('/');
    }
  }

  getQuestionsFromService() {
    this.questions = this._apiService.getQuestionsFromService();
    if (this.questions.length === 0) {
      this._router.navigateByUrl('/trivia');
    }
  }

  cancelGame() {
    this._apiService.questions = [];
    this._router.navigateByUrl('/trivia');
  }

  // getQuestionsFromAPI(num: number): void {
  //   this._apiService.getQuestions(num, (questions) => this.questions = questions);
  // }

  // getRandomQuestions(): void {
  //   this._questionService.getRandomQuestions(5, (questions) => {
  //     this.questions = questions;
  //     console.log(this.questions);
  //   });
  // }

}
