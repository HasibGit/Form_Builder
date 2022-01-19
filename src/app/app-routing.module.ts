import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './MyComponents/questions/questions.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { QuestionComponent } from './MyComponents/question/question.component';


const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: '', component: LoginComponent },
  { path: 'question', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
