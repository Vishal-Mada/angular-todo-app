import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo, TodoService } from '../../../shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  // --- NEW PROPERTIES FOR ENHANCEMENTS ---
  // For filtering
  filter: 'all' | 'active' | 'completed' = 'all';
  // For editing
  editingTodoId: number | null = null;
  editedTodoTitle: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  // --- NEW GETTER FOR FILTERING ---
  get filteredTodos(): Todo[] {
    if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    }
    if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos; // 'all' case
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }

  toggleComplete(todo: Todo): void {
    this.todoService.toggleComplete(todo.id);
  }

deleteTodo(id: number): void {
    // 1. Tell the service to delete the item
    this.todoService.deleteTodo(id);
     this.todos = this.todoService.getTodos();
  }

  // --- NEW METHODS FOR ENHANCEMENTS ---
  setFilter(newFilter: 'all' | 'active' | 'completed'): void {
    this.filter = newFilter;
  }

  startEditing(todo: Todo): void {
    this.editingTodoId = todo.id;
    this.editedTodoTitle = todo.title;
  }

  saveEdit(todo: Todo): void {
    if (this.editedTodoTitle.trim() && this.editingTodoId) {
      this.todoService.updateTodoTitle(this.editingTodoId, this.editedTodoTitle);
    }
    this.cancelEdit();
  }

  cancelEdit(): void {
    this.editingTodoId = null;
    this.editedTodoTitle = '';
  }
}