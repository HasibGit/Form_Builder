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


  @Output() passQuestionPaper: EventEmitter<QuestionPaper> = new EventEmitter();

  questionPapers: QuestionPaper[] = [];


  constructor(private shared: SharedService) {
  }

  ngOnInit(): void {
    this.questionPapers.push(this.shared.getQuestion());
  }

  onClick(questionPaper: QuestionPaper) {
    this.shared.sendQuestion(questionPaper);
  }

}
