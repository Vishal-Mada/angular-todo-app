import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todos',
    // FIX: Lazy-load the standalone component directly
    loadComponent: () => import('./todos/components/todo-list/todo-list.component').then(c => c.TodoListComponent)
  },
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];