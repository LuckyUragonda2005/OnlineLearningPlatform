import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: false,
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css'
})
export class TeacherDashboardComponent {
// Dummy stats (replace these with real data when connected to backend)
assignedCourses: number = 5;
upcomingClasses: number = 3;
averageFeedback: number = 4.5;

constructor(private router: Router) {}

// Navigation functions
viewCourses() {
  this.router.navigate(['/teacherCourses']);
}

viewSchedule() {
  this.router.navigate(['/teacherSchedule']);
}

viewFeedback() {
  this.router.navigate(['/teacherFeedback']);
}

openProfile() {
  // For now, simply alert; later you could open a modal or navigate to a profile page
  alert('Profile clicked!');
}

logout() {
  // Clear user session, then navigate to login
  localStorage.clear();
  this.router.navigate(['/login']);
}
}
