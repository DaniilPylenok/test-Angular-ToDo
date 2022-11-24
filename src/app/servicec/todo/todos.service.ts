import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
  children: Todo[];
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(public http: HttpClient) {}
  public searchTitle: string = '';
  public todos: Todo[] = [
    {
      id: 0,
      title: 'Сделать списо дел на ангуляре',
      createdAt: new Date().toISOString(),
      completed: false,
      children: [],
    },
  ];
  onToggle(id: number) {
    const index = this.todos.findIndex((task) => task.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  }

  onDeleted(id: number) {
    this.todos = this.todos.filter((task) => task.id !== id);
  }

  onAddition(title: string) {
    const todo: Todo = {
      id: new Date().getMilliseconds(),
      title: title,
      createdAt: new Date().toISOString(),
      completed: false,
      children: [],
    };
    this.todos.push(todo);
  }

  changeTitle(id: number, title: string) {
    this.todos.forEach((task) => {
      if (task.id === id) {
        task.title = title;
      }
    });
  }
  fetchGet() {
    this.http
      .get<Todo[]>('http://onkrugot.beget.tech/')
      .subscribe((todoList) => this.todos.push(...todoList));
  }
}
