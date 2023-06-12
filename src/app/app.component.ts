import { Component } from '@angular/core';
import { TodoListModule } from './todo-list/todo-list.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoListSimulator';
}
