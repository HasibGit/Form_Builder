import { Injectable } from '@angular/core';
import { QuestionPaper } from '../QuestionPaper';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  questionPaper: QuestionPaper = new QuestionPaper();
  prev_ques: QuestionPaper[] = [];

  str: string;

  strArray: string[];

  constructor() { }

  sendQuestion(question: QuestionPaper) {
    this.str = JSON.stringify(question);

    if (localStorage.getItem('testObject') == null) {

      console.log(JSON.stringify(question));
      localStorage.setItem('testObject', this.str);
      //console.log(JSON.parse(localStorage.getItem('testObject') || 'null'));
    }
    else {
      //this.prev_ques = [];

      this.str = localStorage.getItem('testObject') + "-" + this.str;

      localStorage.setItem('testObject', this.str);
      //console.log(JSON.parse(localStorage.getItem('testObject') || 'null'));
      // this.prev_ques.push(JSON.parse(localStorage.getItem('testObject') || 'null'));
      // this.prev_ques.push(question);
      // localStorage.setItem('testObject', JSON.stringify(this.prev_ques));
    }

    console.log(localStorage.getItem('testObject'));



    //console.log(JSON.parse(localStorage.getItem('testObject') || "null2"));



  }

  sendQuestion2(question: QuestionPaper) {
    this.questionPaper = question;
  }

  getQuestion() {
    return this.questionPaper;
  }

}