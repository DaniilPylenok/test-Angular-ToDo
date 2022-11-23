import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../servicec/todo/todos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(public todoService: TodoService, public http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Todo[]>('http://onkrugot.beget.tech/')
      .subscribe((todoList) => (this.todoService.todos.push(...todoList)));
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  deleteTodo(id: number) {
    this.todoService.onDeleted(id);
  }

  addTodo(title: string) {
    this.todoService.onAddition(title)
  }
}
