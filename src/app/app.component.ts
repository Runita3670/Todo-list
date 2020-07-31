import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To-Do List';
  todos = [
    {
    label: 'Bring Milk',
    done: false,
    priority: 3
  },
  {
    label: 'Clean house',
    done: false,
    priority: 5
  },
  {
    label: 'Buy sweets',
    done: false,
    priority: 1
  },
  {
    label: 'Visit friend',
    done: false,
    priority: 2
  },
];

addTodo(newTodoLabel){
  var newTodo = {
    label: newTodoLabel,
    priority: 1,
    done: false
  };
  this.todos.push(newTodo);
 } 

 deleteTodo(todo){
   this.todos = this.todos.filter( t => t.label !== todo.label);
 }
}
