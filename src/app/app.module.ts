import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './MyComponents/questions/questions.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { QuestionComponent } from './MyComponents/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    LoginComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
