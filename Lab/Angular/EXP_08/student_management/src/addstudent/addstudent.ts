import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../app/student.service';

@Component({
  standalone: true,
  selector: 'app-addstudent',
  imports: [CommonModule, FormsModule],
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css',
})
export class Addstudent {
  name = '';
  age: number | null = null;

  constructor(private readonly studentService: StudentService) {}

  addStudent(): void {
    const name = this.name.trim();
    const age = this.age ?? 0;

    if (!name || age <= 0) {
      return;
    }

    this.studentService.add({ name, age });
    this.name = '';
    this.age = null;
  }
}
