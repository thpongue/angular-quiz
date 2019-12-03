import {Component, OnInit} from '@angular/core';
import * as data from '../assets/data/questions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  index: number;
  title: string = 'angular-quiz';

  ngOnInit() {
    this.index = Math.floor(data.questions.length * Math.random());
  }

  get question(): any {
    return data.questions[this.index].question;
  }

  get answer(): any {
    return data.questions[this.index].answer;
  }
}
