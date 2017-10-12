import { ApiService } from './api.service';
import { ResultService } from './result.service';
import { QuestionService } from './question.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { TriviaComponent } from './trivia/trivia.component';
import { DashboardComponent } from './trivia/dashboard/dashboard.component';
import { NewQuestionComponent } from './trivia/new-question/new-question.component';
import { GameComponent } from './trivia/game/game.component';
import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
import { ResultsComponent } from './results/results.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TriviaComponent,
    DashboardComponent,
    NewQuestionComponent,
    GameComponent,
    ApiDashboardComponent,
    ResultsComponent,
    RegisterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    UserService,
    QuestionService,
    ResultService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
