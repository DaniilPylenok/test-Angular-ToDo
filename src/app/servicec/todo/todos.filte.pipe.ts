import { Pipe, PipeTransform } from '@angular/core';
import { Todo, TodoService } from './todos.service';

@Pipe({
  name: 'todoFilter',
})
export class TodoFiltePipe implements PipeTransform {
  constructor(public todoService: TodoService) {}

  transform(todos: Todo[], searchTitle: string = ''): Todo[] {
    if (searchTitle.trim().length) {
      return this.todoService.todos.filter((task: Todo) =>
        task.title.toLowerCase().includes(searchTitle.trim().toLowerCase())
      );
    } else {
      return this.todoService.todos;
    }
  }
}
