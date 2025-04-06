import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-view-assignment',
  standalone: false,
  templateUrl: './teacher-view-assignment.component.html',
  styleUrl: './teacher-view-assignment.component.css'
})
export class TeacherViewAssignmentComponent {
  constructor(private route:Router){}
  searchTerm = '';

  assignments = [
    { title: 'Math Homework', subject: 'Mathematics', dueDate: '2025-04-10', status: 'Pending' },
    { title: 'Science ', subject: 'Science', dueDate: '2025-04-15', status: 'Submitted' },
    { title: 'History Essay', subject: 'History', dueDate: '2025-04-12', status: 'Pending' },
    { title: 'History ', subject: 'History', dueDate: '2025-04-12', status: 'Pending' },
    { title: 'Geometry', subject: 'Mathematics', dueDate: '2025-04-10', status: 'Pending' },

  ];

  filteredAssignments() {
    const term = this.searchTerm.toLowerCase();
    return this.assignments.filter(a =>
      a.title.toLowerCase().includes(term) || a.subject.toLowerCase().includes(term)
    );
  }

  viewDetails(assignment: any) {

    alert(`Viewing details for: ${assignment.title}`);
    // navigate or open modal as needed
  }

  deleteAssignment(assignment: any) {
    const confirmDelete = confirm(`Are you sure to delete: ${assignment.title}?`);
    if (confirmDelete) {
      this.assignments = this.assignments.filter(a => a !== assignment);
    }
  }
}
