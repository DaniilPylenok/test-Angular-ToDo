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
  public sesearchTitle = '';

  ngOnInit() {
    this.todoService.fetchGet()
    
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  deleteTodo(id: number) {
    this.todoService.onDeleted(id);
  }

  addTodo() {
    const title: string | null = prompt('Введите заголовок задачи', '');
    if (typeof title === 'string' && title.trim().length) {
      this.todoService.onAddition(title);
    }
  }

  updateTodo(id: number) {
    const title: string | null = prompt('Введите новый заголовок задачи', '');
    if (typeof title === 'string' && title.trim().length) {
      this.todoService.changeTitle(id, title);
    }
  }
}
