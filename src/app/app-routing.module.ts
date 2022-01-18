import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './MyComponents/questions/questions.component';
import { LoginComponent } from './MyComponents/login/login.component';


const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
