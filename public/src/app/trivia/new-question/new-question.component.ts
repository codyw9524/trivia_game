import { QuestionService } from './../../question.service';
import { Answer } from './../../answer';
import { Question } from './../../question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  newQuestion: Question = new Question();
  errors: string[] = [];
  success: any = {
    status: false,
    message: 'Question added successfully.'
  };

  constructor(
    private _questionService: QuestionService
  ) { }

  ngOnInit() {
  }

  createQuestion() {
    this.success.status = false;
    this.errors = [];
    this._questionService.createQuestion(this.newQuestion, (question) => {
      console.log(question);
      if (question.errors) {
        for (const key of Object.keys(question.errors)) {
          const error = question.errors[key];
          this.errors.push(error.message);
        }
      } else {
        this.newQuestion = new Question();
        this.success.status = true;
      }
    });
  }

}
