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

  todoTitle: '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe((response) => {
        console.log('Response: ', response);
        this.todos = response;
      });
  }

  addTodo(): void {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.http
      .post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe((todo) => {
        console.log('Todo ', todo);
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }
}
