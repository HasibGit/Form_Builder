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
    if (localStorage.getItem('testObject') == null) {
      localStorage.setItem('testObject', JSON.stringify(question));
      console.log(JSON.parse(localStorage.getItem('testObject') || 'null'));

    }
    else {
      this.prev_ques = [];
      this.prev_ques.push(JSON.parse(localStorage.getItem('testObject') || 'null'));
      this.prev_ques.push(question);
      localStorage.setItem('testObject', JSON.stringify(this.prev_ques));
    }


    //console.log(JSON.parse(localStorage.getItem('testObject') || "null2"));



  }

  getQuestion() {
    return this.questionPaper;
  }

}