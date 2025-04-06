import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-create-course',
  standalone: false,
  templateUrl: './teacher-create-course.component.html',
  styleUrl: './teacher-create-course.component.css'
})
export class TeacherCreateCourseComponent {
  course = {
    title: '',
    description: '',
    category: '',
    thumbnail: ''
  };

  categories: string[] = ['Web Development', 'Design', 'Programming', 'Mathematics', 'Science'];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.course.thumbnail = URL.createObjectURL(file); // For preview purposes
      console.log('Selected file:', file);
    }
  }

  submitCourse() {
    console.log('Course submitted:', this.course);
    alert('Course created successfully!');
    this.resetForm();
  }

  resetForm() {
    this.course = {
      title: '',
      description: '',
      category: '',
      thumbnail: ''
    };
  }
}
