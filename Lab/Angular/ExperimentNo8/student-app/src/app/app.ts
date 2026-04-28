// src/app/app.component.ts
import { Component } from '@angular/core';
import { StudentListComponent } from './student-list/student-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent], // Import your created component here
  template: `
    <main>
      <app-student-list></app-student-list> 
    </main>
  `
})
export class App { }