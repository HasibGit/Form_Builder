import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})



export class AddQuestionComponent implements OnInit {

  optionsArray = new FormArray([new FormControl('', Validators.required)]);

  constructor() { }

  ngOnInit(): void {
  }

  addInputControl() {
    this.optionsArray.push(new FormControl('', Validators.required));
  }

  removeInputControl(idx: number) {
    this.optionsArray.removeAt(idx);
  }

}
