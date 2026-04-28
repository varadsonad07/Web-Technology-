import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../app/student.service';

@Component({
  standalone: true,
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  get students() {
    return this.studentService.students;
  }

  constructor(private readonly studentService: StudentService) {}
}
