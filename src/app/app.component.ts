import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  posts: Array<Post> = [
    {
      title: 'I need to learn Angular Components',
      text: 'And still learning...😁',
      id: 1,
    },
    { title: 'Next block about', text: 'directives and something else', id: 2 },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0].title = 'New';
    }, 5000);
  }

  updatePosts(post: Post): void {
    this.posts.unshift(post);
  }

  removePost(id: number): void {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
