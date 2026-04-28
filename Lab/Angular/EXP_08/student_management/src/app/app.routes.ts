import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Addstudent } from '../addstudent/addstudent';
import { StudentList } from '../student-list/student-list';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'add-student', component: Addstudent },
  { path: 'student-list', component: StudentList },
  { path: '**', redirectTo: 'home' }
];
