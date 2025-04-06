import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-create-assignments',
  standalone: false,
  templateUrl: './teacher-create-assignments.component.html',
  styleUrl: './teacher-create-assignments.component.css'
})
export class TeacherCreateAssignmentsComponent {
  courses = ['Mathematics', 'Science', 'History', 'English']; // You can fetch from backend

  assignment = {
    course: '',
    title: '',
    description: '',
    dueDate: '',
    file: null
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.assignment.file = file;
  }

  submitAssignment() {
    console.log('Assignment Data:', this.assignment);
    // Handle backend API call
    alert('Assignment submitted successfully!');
    this.resetForm();
  }

  resetForm() {
    this.assignment = {
      course: '',
      title: '',
      description: '',
      dueDate: '',
      file: null
    };
  }
}
