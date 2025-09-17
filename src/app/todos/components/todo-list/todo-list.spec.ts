import { ComponentFixture, TestBed } from '@angular/core/testing';

// FIX: Changed 'TodoList' to 'TodoListComponent'
import { TodoListComponent } from './todo-list.component';

// FIX: Changed 'TodoList' to 'TodoListComponent'
describe('TodoListComponent', () => {
  // FIX: Changed 'TodoList' to 'TodoListComponent'
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // For standalone components, you import the component itself
      imports: [TodoListComponent]
    })
    .compileComponents();

    // FIX: Changed 'TodoList' to 'TodoListComponent'
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});