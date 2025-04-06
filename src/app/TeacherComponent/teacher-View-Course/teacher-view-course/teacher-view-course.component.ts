import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-view-course',
  standalone: false,
  templateUrl: './teacher-view-course.component.html',
  styleUrl: './teacher-view-course.component.css'
})
export class TeacherViewCourseComponent {
  courses: any[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        title: 'Angular for Beginners',
        description: 'Learn Angular from scratch including modules, components, and routing.',
        category: 'Web Development',
        thumbnail: 'https://angular.io/generated/images/marketing/conceptual-architecture.png'
      },
      {
        title: 'Spring Boot APIs',
        description: 'Build secure REST APIs using Spring Boot and Spring Security.',
        category: 'Backend Development',
        thumbnail: 'https://miro.medium.com/v2/resize:fit:1200/1*fVWrU1Jt9HDDiRLhEdbHCQ.png'
      }
    ];
  }

  editCourse(course: any) {
    alert('Edit Course: ' + course.title);
    // Navigate to edit page or open modal
  }

  deleteCourse(course: any) {
    if (confirm(`Are you sure you want to delete "${course.title}"?`)) {
      this.courses = this.courses.filter(c => c !== course);
    }
  }
}
