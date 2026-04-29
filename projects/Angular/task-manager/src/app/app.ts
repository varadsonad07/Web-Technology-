import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Task[] = [
    { id: 1, title: 'Learn Angular Basics', completed: false },
    { id: 2, title: 'Build Task Manager App', completed: true }
  ];

  newTask: string = '';

  addTask() {
    if (this.newTask.trim() === '') return;

    const task: Task = {
      id: Date.now(),
      title: this.newTask,
      completed: false
    };

    this.tasks.push(task);
    this.newTask = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}