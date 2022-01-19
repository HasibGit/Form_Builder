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

  questionPapers: QuestionPaper[] = [
    {
      subject: "Math",
      desc: "Full Marks: 60",
      questions: [
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        }
      ]
    },

    {
      subject: "Physics",
      desc: "Full Marks: 60",
      questions: [
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        }
      ]
    },

    {
      subject: "Chemistry",
      desc: "Full Marks: 60",
      questions: [
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        }
      ]
    },

    {
      subject: "Biology",
      desc: "Full Marks: 60",
      questions: [
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        },
        {
          question: "what is ai",
          options: ["what", "how", "where", "whom"]
        }
      ]
    }
  ]


  constructor(private shared: SharedService) { }
  ngOnInit(): void {

  }

  onClick(questionPaper: QuestionPaper) {
    this.shared.sendQuestion(questionPaper);
  }

}
