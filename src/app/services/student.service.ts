import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/student';

  constructor(private http: HttpClient) {}

  addStudent(student: Student): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/add`, student);
  }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/all`);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  updateStudent(student: Student): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update`, student);
  }

  findByName(name: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/search/${name}`);
  }
}
