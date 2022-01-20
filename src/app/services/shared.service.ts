import { Injectable } from '@angular/core';
import { QuestionPaper } from '../QuestionPaper';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  questionPaper: QuestionPaper = new QuestionPaper();
  constructor() { }

  sendQuestion(question: QuestionPaper) {
    this.questionPaper = question;
  }

  getQuestion() {
    return this.questionPaper;
  }

}
