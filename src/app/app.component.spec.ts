import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {QuestionService} from './question.service';
import {MockComponent} from 'ng-mocks';
import {QuestionComponent} from './question/question.component';

describe('AppComponent', () => {

  // let mockQuestionService: Partial<QuestionService>;
  // beforeEach(() => {
  //   mockQuestionService = {};
  //   mockQuestionService.getRandomQuestion = jasmine.createSpy().and.returnValue(null);
  // });

  let mockQuestionService: QuestionService;
  beforeEach(() => {
    mockQuestionService = jasmine.createSpyObj(['getRandomQuestion']);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(QuestionComponent)
      ],
      providers: [{provide: QuestionService, useValue: mockQuestionService}]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-quiz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-quiz');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-quiz!');
  });
});
