import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Question } from 'src/app/Question';
import { QuestionPaper } from 'src/app/QuestionPaper';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})



export class AddQuestionComponent implements OnInit {

  optionsArray = new FormArray([new FormControl('', Validators.required)]);

  questions: Question[] = [];

  question: string;

  newQuestion: Question = new Question();

  constructor() { }

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
    console.log(this.newQuestion);
  }

}
