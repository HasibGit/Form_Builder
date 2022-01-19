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
      desc: "hard",
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
      desc: "hard",
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
      desc: "hard",
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
      desc: "hard",
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
