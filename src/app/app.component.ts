import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskListComponent,DarkModeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-tracker';
}
