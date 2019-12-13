import {Component, OnInit} from '@angular/core';
import {QuestionModel} from './question.model';
import {QuestionService} from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'angular-quiz';
  randomQuestion: QuestionModel;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.randomQuestion = this.questionService.getRandomQuestion();
  }
}
