import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-task-list',
  standalone:true,
  imports:[FormsModule,ModalComponent,AlertComponent],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask = '';
  alertMessage = '';
alertType: 'success' | 'error' = 'success';
showInfo = false;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.alertMessage = 'Task added successfully!';
      this.alertType = 'success';
      this.newTask = '';
    } else {
      this.alertMessage = 'Task title cannot be empty.';
      this.alertType = 'error';
    }

  }
  toggle(id: number) {
    this.taskService.toggleTask(id);
  }

  delete(id: number) {
    this.taskService.deleteTask(id);
  }
}
