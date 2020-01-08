import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Array<Post> = [
    { title: 'One', text: 'One of us' },
    { title: 'Two', text: 'Two real mans' },
    { title: 'Three', text: 'Three cats' },
  ];

  search = '';

  searchField = 'title';

  addPost(): void {
    this.posts.unshift({ title: 'Angular', text: 'Angular Angular Angular' });
  }
}
