import { Injectable } from '@angular/core';
import * as data from '../assets/data/questions.json';
import {QuestionModel} from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getRandomQuestion(): QuestionModel {
    const index: number = Math.floor(data.questions.length * Math.random());
    return data.questions[index];
  }
}
