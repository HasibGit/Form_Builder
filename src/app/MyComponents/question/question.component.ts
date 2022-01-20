import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { QuestionPaper } from 'src/app/QuestionPaper';
import { Question } from 'src/app/Question'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionPaper: QuestionPaper;

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.questionPaper = this.shared.getQuestion();
    //console.log(this.questionPaper);

  }

}