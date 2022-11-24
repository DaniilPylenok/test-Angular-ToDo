import { Component } from '@angular/core';
import { TodoService } from './services/todo/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ToDo';
  constructor(public todoService: TodoService) {}
  addTodo() {
    const title: string | null = prompt('Введите заголовок задачи', '');
    if (typeof title === 'string' && title.trim().length) {
      this.todoService.onAddition(title);
    }
  }
}
