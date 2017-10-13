import { ApiService } from './../../services/api.service';
import { ResultService } from './../../services/result.service';
import { GameResult } from './../../models/game-result';
import { Router } from '@angular/router';
import { QuestionService } from './../../services/question.service';
import { UserService } from './../../services/user.service';
import { Question } from './../../models/question';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  currentUser: User = new User();
  questions: Question[];
  gameData = { answers: [] };
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
  }

  onSubmit() {
    const correctAnswers = this.gameData.answers.filter((answer) => answer.correct === true).length;
    const totalAnswers = this.gameData.answers.length;
    const gameResult = new GameResult(correctAnswers, totalAnswers, this.currentUser._id);
    this._resultService.createResults(gameResult, (result) => {
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
}
