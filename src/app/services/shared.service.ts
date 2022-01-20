import { Injectable } from '@angular/core';
import { QuestionPaper } from '../QuestionPaper';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  questionPaper: QuestionPaper = new QuestionPaper();
  prev_ques: QuestionPaper[] = [];
  constructor() { }

  sendQuestion(question: QuestionPaper) {
    this.questionPaper = question;
    if (this.prev_ques.length == 0) {
      localStorage.setItem('testObject', JSON.stringify(question));
      this.prev_ques.push(question);
    }
    else {
      this.prev_ques.push(question);
      localStorage.setItem('testObject', JSON.stringify(this.prev_ques));
    }

    console.log(localStorage.getItem('testObject'));

  }

  getQuestion() {
    return this.questionPaper;
  }

}