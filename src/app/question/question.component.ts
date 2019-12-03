import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: string;
  @Input() answer: string;
  showAnswer: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
