import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
// import { NewQuestionComponent } from './trivia/new-question/new-question.component';
// import { DashboardComponent } from './trivia/dashboard/dashboard.component';
// import { TriviaComponent } from './trivia/trivia.component';
// import { LoginComponent } from './login/login.component';
// import { GameComponent } from './trivia/game/game.component';
// import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    },
    {
        path: 'trivia',
        loadChildren: 'app/trivia/trivia.module#TriviaModule'
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
