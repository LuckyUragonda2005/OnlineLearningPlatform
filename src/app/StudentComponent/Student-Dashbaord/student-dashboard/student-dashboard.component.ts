import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  standalone: false,
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
  studentName: string = 'Lucky Uragonda'; // Default fallback
  enrolledCourses = 5;
  pendingAssignments = 3;
  overallProgress = 72;
  feedbackCount = 4;



  ngOnInit() {
    // Replace this with real logic from auth/user service
    const storedName = localStorage.getItem('studentName');
    if (storedName) {
      this.studentName = storedName;
    }

    // You can also use a user service like:
    // this.authService.getCurrentUser().subscribe(user => {
    //   this.studentName = user.name;
    // });
  }



  goToCourses() {
    // navigate to course list
  }

  goToAssignments() {
    // navigate to assignments
  }

  goToProgress() {
    // navigate to progress tracking
  }

  goToFeedback() {
    // navigate to feedback page
  }

  openProfile() {
    // show profile modal or navigate to profile page
  }

  logout() {
    localStorage.clear();

    // perform logout
  }
}


