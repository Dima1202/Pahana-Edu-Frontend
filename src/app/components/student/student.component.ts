import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  studentId: number;
  name: string;
  address: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  public students: Student[] = [];
  selectedStudent: Student = { studentId: 0, name: '', address: '' };
  public isUpdate = false;
  public searchName = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.http.get<Student[]>('http://localhost:8080/student/all').subscribe({
      next: (res) => {
        this.students = res;
        console.log('Loaded students:', res);
      },
      error: (err) => {
        console.error('Error loading students:', err);
        alert('Failed to load students.');
      }
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      this.http.put('http://localhost:8080/student/update', this.selectedStudent).subscribe({
        next: () => {
          alert('Student updated successfully!');
          this.resetForm();
          this.getStudents();
        },
        error: (err) => {
          console.error('Update failed:', err);
          alert('Failed to update student.');
        }
      });
    } else {
      // ✅ Exclude studentId when adding a new student
      const newStudent = {
        name: this.selectedStudent.name,
        address: this.selectedStudent.address
      };
  
      this.http.post('http://localhost:8080/student/add', newStudent).subscribe({
        next: () => {
          alert('Student added successfully!');
          this.resetForm();
          this.getStudents();
        },
        error: (err) => {
          console.error('Add failed:', err);
          alert('Failed to add student.');
        }
      });
    }
  }
  

  editStudent(student: Student) {
    this.selectedStudent = { ...student };
    this.isUpdate = true;
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.http.delete(`http://localhost:8080/student/delete/${id}`).subscribe({
        next: () => {
          alert('Student deleted successfully!');
          this.getStudents();
        },
        error: (err) => {
          console.error('Delete failed:', err);
          alert('Failed to delete student.');
        }
      });
    }
  }

  searchStudent() {
    if (!this.searchName.trim()) {
      this.getStudents();
      return;
    }

    this.http.get<Student>(`http://localhost:8080/student/search/${this.searchName}`).subscribe({
      next: (res) => {
        this.students = [res];
      },
      error: (err) => {
        console.error('Search failed:', err);
        alert('Student not found.');
      }
    });
  }

  resetForm() {
    this.selectedStudent = { studentId: 0, name: '', address: '' };
    this.isUpdate = false;
    this.searchName = '';
  }
}
