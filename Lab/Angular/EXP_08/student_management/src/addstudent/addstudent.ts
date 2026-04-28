import { Component } from '@angular/core';
import { StudentService } from '../app/student.service';

@Component({
  standalone: true,
  selector: 'app-addstudent',
  imports: [],
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css',
})
export class Addstudent {
  name = '';
  age = '';

  constructor(private readonly studentService: StudentService) {}

  addStudent(nameInput: HTMLInputElement, ageInput: HTMLInputElement): void {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    if (!name || !age) {
      return;
    }

    this.studentService.add({ name, age });
    nameInput.value = '';
    ageInput.value = '';
    nameInput.focus();
  }
}
