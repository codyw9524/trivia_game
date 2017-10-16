// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { NewQuestionComponent } from './new-question/new-question.component';
import { GameComponent } from './game/game.component';
import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
import { TriviaComponent } from './trivia.component';

const routes: Routes = [
    {
      path: '',
      component: TriviaComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          component: ApiDashboardComponent
        },
        {
          path: 'play',
          component: GameComponent
        },
        {
            path: 'new',
            component: NewQuestionComponent
        }
      ]
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriviaRoutingModule { }
