import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      'https://jsonplaceholder.typicode.com/todos',
      todo,
    );
  }

  fetchTodos(): Observable<Array<Todo>> {
    return this.http
      .get<Array<Todo>>(
        'https://jsonplaceholder.typicode.com/tod!!!os?_limit=2',
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        }),
      );
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        completed: true,
      },
    );
  }
}
