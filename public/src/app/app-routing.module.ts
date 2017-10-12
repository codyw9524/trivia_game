import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
import { NewQuestionComponent } from './trivia/new-question/new-question.component';
import { DashboardComponent } from './trivia/dashboard/dashboard.component';
import { TriviaComponent } from './trivia/trivia.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './trivia/game/game.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'trivia',
        component: TriviaComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ApiDashboardComponent
            },
            {
                path: 'new',
                // pathMatch: 'full',
                component: NewQuestionComponent
            }
        ]
    },
    {
        path: 'lets_play',
        component: GameComponent
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
