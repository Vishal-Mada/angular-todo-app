import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId: number = 1;
  private readonly STORAGE_KEY = 'angular_todos';

  constructor() {
    // NEW: Load the saved state from local storage when the app starts
    this.loadStateFromLocalStorage();
  }

  // --- PRIVATE METHODS FOR LOCAL STORAGE ---
  private saveStateToLocalStorage(): void {
    const state = {
      todos: this.todos,
      nextId: this.nextId
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
  }

  private loadStateFromLocalStorage(): void {
    const savedState = localStorage.getItem(this.STORAGE_KEY);
    if (savedState) {
      const state = JSON.parse(savedState);
      // Ensure dates are properly converted back from strings
      this.todos = state.todos.map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
      this.nextId = state.nextId;
    }
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.nextId++,
      title: title,
      completed: false,
      createdAt: new Date()
    };
    this.todos.push(newTodo);
    this.saveStateToLocalStorage(); // Save after adding
  }

  toggleComplete(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveStateToLocalStorage(); // Save after toggling
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveStateToLocalStorage(); // Save after deleting
  }

  // NEW: Method to update a todo's title for the edit feature
  updateTodoTitle(id: number, newTitle: string): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.title = newTitle;
      this.saveStateToLocalStorage(); // Save after updating
    }
  }
}