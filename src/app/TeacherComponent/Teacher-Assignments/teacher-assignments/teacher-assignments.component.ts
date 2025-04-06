import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-assignments',
  standalone: false,
  templateUrl: './teacher-assignments.component.html',
  styleUrl: './teacher-assignments.component.css'
})
export class TeacherAssignmentsComponent {
  constructor(private router: Router) {}

  goToAdd() {
    this.router.navigate(['/add-assignment']);
  }

  goToList() {
    this.router.navigate(['/list-assignments']);
  }
}
