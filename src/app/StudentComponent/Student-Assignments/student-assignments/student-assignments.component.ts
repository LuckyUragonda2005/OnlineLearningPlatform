import { Component } from '@angular/core';

@Component({
  selector: 'app-student-assignments',
  standalone: false,
  templateUrl: './student-assignments.component.html',
  styleUrl: './student-assignments.component.css'
})
export class StudentAssignmentsComponent {
  assignments = [
    {
      title: 'Angular Basics',
      description: 'Complete the component and service creation for the given module.',
      course: 'Web Development',
      dueDate: new Date('2025-04-10'),
      status: 'Pending'
    },
    {
      title: 'Math Quiz: Algebra',
      description: 'Solve the problems in the attached PDF and submit your answers.',
      course: 'Mathematics',
      dueDate: new Date('2025-04-05'),
      status: 'Submitted'
    },
    {
      title: 'Essay on Climate Change',
      description: 'Write a 500-word essay and upload it as a document.',
      course: 'Science',
      dueDate: new Date('2025-03-31'),
      status: 'Overdue'
    }
  ];

  viewAssignment(assignment: any) {
    alert(`Opening assignment: ${assignment.title}`);
    // Navigate to details or submission page
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'pending';
      case 'Submitted':
        return 'submitted';
      case 'Overdue':
        return 'overdue';
      default:
        return '';
    }
  }
}
