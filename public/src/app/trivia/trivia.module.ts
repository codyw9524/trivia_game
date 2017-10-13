import { CommonModule } from '@angular/common';
import { TriviaComponent } from './trivia.component';
import { TriviaRoutingModule } from './trivia-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

// Components
import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
import { ResultsComponent } from './results/results.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { GameComponent } from './game/game.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Services
import { ApiService } from './../services/api.service';
import { ResultService } from './../services/result.service';
import { QuestionService } from './../services/question.service';


@NgModule({
    declarations: [
        TriviaComponent,
        ApiDashboardComponent,
        DashboardComponent,
        GameComponent,
        NewQuestionComponent,
        ResultsComponent
    ],
    imports: [
        NgbModule,
        FormsModule,
        HttpModule,
        TriviaRoutingModule,
        CommonModule
    ],
    providers: [
        QuestionService,
        ResultService,
        ApiService
    ],
})
export class TriviaModule { }
