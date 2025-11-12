import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    const task: Task = { id: Date.now(), title, completed: false };
    this.tasks.push(task);
  }

  toggleTask(id: number) {
    const t = this.tasks.find(x => x.id === id);
    if (t) t.completed = !t.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(x => x.id !== id);
  }
}
