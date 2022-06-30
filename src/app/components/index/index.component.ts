import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
  // 1- textbox
  // 2- checkbox
  // 3- radiobutton
  // 4 - dropdown
  dummyData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dummyData = [
      {
        Title: 'Question 1',
        Position: 4,
        Answertype: 1,
        AnswerValues: "Playing Basketball"
      },
      {
        Title: 'Question 2',
        Position: 2,
        Answertype: 2,
        AnswerValues: [
          { id: 1, Name: 'Playing' },
          { id: 2, Name: 'Watching' },
          { id: 3, Name: 'Travelling' },
        ],
      },
      {
        Title: 'Question 3',
        Position: 3,
        Answertype: 3,
        AnswerValues: [
          { id: 1, Name: 'Playing' },
          { id: 2, Name: 'Watching' },
          { id: 3, Name: 'Travelling' },
        ],
      },
      {
        Title: 'Question 4',
        Position: 1,
        Answertype: 4,
        AnswerValues: [
          { id: 1, Name: 'Playing' },
          { id: 2, Name: 'Watching' },
          { id: 3, Name: 'Travelling' },
        ],
      },
    ].sort((a, b) => (a.Position > b.Position) ? 1 : -1);
  }
}
