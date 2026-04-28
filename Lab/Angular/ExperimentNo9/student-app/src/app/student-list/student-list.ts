import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor
import { StudentService } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentListComponent implements OnInit {
  
  students: any[] = [];

  // Dependency Injection: Angular automatically provides the StudentService object
  constructor(private StudentService: StudentService) {}

  ngOnInit() {
    // Fetch data from the service when the component initializes
    this.students = this.StudentService.getStudents();
  }
}