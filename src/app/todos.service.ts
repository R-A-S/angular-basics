import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      MyCustomHeader: Math.random().toString(),
    });
    return this.http.post<Todo>(
      'https://jsonplaceholder.typicode.com/todos',

      todo,
      { headers },
      // {
      //   headers: new HttpHeaders({
      //     MyCustomHeader: Math.random().toString(),
      //     SecondXXX: '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      //   }),
      // },
    );
  }

  fetchTodos(): Observable<Array<Todo>> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'anything');
    return this.http
      .get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos', {
        // params: new HttpParams().set('_limit', '3'),
        params,
      })
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
