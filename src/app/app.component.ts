import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe((response) => {
        console.log('Response: ', response);
        this.todos = response;
      });
  }
}
