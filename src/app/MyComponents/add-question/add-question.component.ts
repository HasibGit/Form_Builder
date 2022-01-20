import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Question } from 'src/app/Question';
import { QuestionPaper } from 'src/app/QuestionPaper';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})



export class AddQuestionComponent implements OnInit {

  @Output() passQuestionPaper: EventEmitter<QuestionPaper> = new EventEmitter();

  optionsArray = new FormArray([new FormControl('', Validators.required)]);

  questions: Question[] = [];

  subject: string;
  desc: string;
  question: string;

  newQuestion: Question = new Question();
  questionPaper: QuestionPaper = new QuestionPaper();

  constructor(private shared: SharedService, public router: Router) { }

  ngOnInit(): void {
  }

  addInputControl() {
    this.optionsArray.push(new FormControl('', Validators.required));
  }

  removeInputControl(idx: number) {
    this.optionsArray.removeAt(idx);
  }

  onSubmit() {
    this.newQuestion.question = this.question;
    this.newQuestion.options = this.optionsArray.value;
    this.questions.push(this.newQuestion);
    this.optionsArray = new FormArray([new FormControl('', Validators.required)]);
  }

  onSubmit2() {
    this.questionPaper.subject = this.subject;
    this.questionPaper.desc = this.desc;
    this.questionPaper.questions = this.questions;
    this.shared.sendQuestion(this.questionPaper);

    this.router.navigate(['questions']);
  }

}