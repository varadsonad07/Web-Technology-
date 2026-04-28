import { Injectable, signal } from '@angular/core';

export interface Student {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly _students = signal<Student[]>([]);
  readonly students = this._students.asReadonly();

  add(student: Student): void {
    this._students.update((current) => [...current, student]);
  }
}
