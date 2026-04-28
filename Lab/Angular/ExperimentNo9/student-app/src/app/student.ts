import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Array of student data
  students = [
    { name: 'varad', age: 21, course: 'B.tech' },
    { name: 'Rahul', age: 23, course: 'IT' },
    { name: 'Amit', age: 21, course: 'M.tech' }
  ];

  // Method to return the data
  getStudents() {
    return this.students;
  }
}