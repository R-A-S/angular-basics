import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'Post 1',
      author: 'Ivan',
      comments: [
        { title: 'comment 1', text: 'Lorem 1' },
        { title: 'comment 2', text: 'Lorem 2' },
        { title: 'comment 3', text: 'Lorem 3' },
      ],
    },
    {
      title: 'Post 2',
      author: 'Misha',
      comments: [
        { title: 'comment 1', text: 'Lorem 1' },
        { title: 'comment 2', text: 'Lorem 2' },
        { title: 'comment 3', text: 'Lorem 3' },
      ],
    },
  ];
}
