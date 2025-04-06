import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-course',
  standalone: false,
  templateUrl: './teacher-course.component.html',
  styleUrl: './teacher-course.component.css'
})
export class TeacherCourseComponent {
  constructor(private router: Router) {}

  goToAddCourse() {
    this.router.navigate(['/addCourse']);
  }

  goToViewCourses() {
    this.router.navigate(['/viewCourses']);
  }
}
