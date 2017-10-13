// Modules
import { TriviaModule } from './trivia/trivia.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Services
import { ApiService } from './services/api.service';
import { ResultService } from './services/result.service';
import { QuestionService } from './services/question.service';
import { UserService } from './services/user.service';

// Components
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { TriviaComponent } from './trivia/trivia.component';
// import { DashboardComponent } from './trivia/dashboard/dashboard.component';
// import { NewQuestionComponent } from './trivia/new-question/new-question.component';
// import { GameComponent } from './trivia/game/game.component';
// import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
// import { ResultsComponent } from './results/results.component';
// import { RegisterComponent } from './register/register.component';
// import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // TriviaComponent,
    // DashboardComponent,
    // NewQuestionComponent,
    // GameComponent,
    // ApiDashboardComponent,
    // ResultsComponent,
    // RegisterComponent,
    // AuthComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AuthModule,
    TriviaModule
  ],
  providers: [
    UserService,
    // QuestionService,
    // ResultService,
    // ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
