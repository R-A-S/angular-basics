import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Array<Post> = [
    { title: 'I need to learn Angular Components', text: 'And still learning...😁', id: 1 },
    { title: 'Next block about', text: 'directives and something else', id: 2 },
  ];
}
