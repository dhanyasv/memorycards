import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionAnswersComponent } from './questionAnswers/questionAnswers.component';
import { TopicsDeckComponent } from './topicsDeck/topicsdeck.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component:  TopicsDeckComponent },
  { path: 'heroes', component: QuestionAnswersComponent },
  { path: 'addquestion', component: FoodComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
