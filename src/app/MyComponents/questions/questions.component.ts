import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Question } from '../../Question';
import { QuestionPaper } from '../../QuestionPaper';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  test: QuestionPaper = new QuestionPaper();
  str: string;
  strArray: string[];

  idx: number;

  @Output() passQuestionPaper: EventEmitter<QuestionPaper> = new EventEmitter();

  questionPapers: QuestionPaper[] = [];


  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {

    this.str = "" + localStorage.getItem('QUESTIONS');

    this.strArray = [];

    this.strArray = this.str.split('-');

    //console.log(this.strArray.length + "######" + this.str);

    for (this.idx = 0; this.idx < this.strArray.length; this.idx++) {
      this.test = JSON.parse(this.strArray[this.idx]);
      //console.log("testing " + this.idx + " " + "####" + this.test.subject);
      this.questionPapers.push(this.test);
    }






    //this.questionPapers.push(this.shared.getQuestion());
    // console.log(this.questionPapers);

    // this.str = `{"subject":"Java","desc":"68","questions":[{"question":"viwenviowejv","options":["4","7"]}]}`;

    // this.test = JSON.parse(this.str);
    // console.log("Printing JSON ---- " + this.test.subject);
    // console.log("Printing JSON ---- " + this.test.questions.length);
    // console.log("Printing JSON ---- " + this.test.desc);

  }

  onClick(questionPaper: QuestionPaper) {
    this.shared.sendQuestion2(questionPaper);
  }

}