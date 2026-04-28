// src/app/student-list/student-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule for ngModel
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentListComponent {
  // 1. Initialize an array of students
  students: Student[] = [
    { id: 1, name: 'Aditi Sharma', course: 'Artificial Intelligence' },
    { id: 2, name: 'Rahul Verma', course: 'Machine Learning' }
  ];

  // 2. Object to hold new student data from the form
  newStudent: Student = { id: 0, name: '', course: '' };

  // 3. Method to handle adding a student (Event Binding)
  addStudent() {
    if (this.newStudent.name && this.newStudent.course) {
      // Auto-increment ID based on array length
      this.newStudent.id = this.students.length > 0 
        ? Math.max(...this.students.map(s => s.id)) + 1 
        : 1;
        
      // Push a copy of the object to the array
      this.students.push({ ...this.newStudent });
      
      // Reset the form fields
      this.newStudent = { id: 0, name: '', course: '' }; 
    }
  }

  // 4. Method to handle deleting a student
  deleteStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
}