import { Component } from '@angular/core';

@Component({
  selector: 'app-student-homework',
  standalone: false,
  templateUrl: './student-homework.component.html',
  styleUrl: './student-homework.component.css'
})
export class StudentHomeworkComponent {
  homeworkList = [
    {
      title: 'Grammar Worksheet',
      subject: 'English',
      description: 'Complete the parts of speech worksheet in your notebook.',
      dueDate: new Date('2025-04-08'),
      status: 'Pending'
    },
    {
      title: 'Science Diagram Drawing',
      subject: 'Biology',
      description: 'Draw and label the human digestive system.',
      dueDate: new Date('2025-04-06'),
      status: 'Done'
    },
    {
      title: 'Math Practice Set',
      subject: 'Mathematics',
      description: 'Solve exercises 3.1 to 3.4 from textbook.',
      dueDate: new Date('2025-04-07'),
      status: 'Pending'
    }
  ];

  markAsDone(task: any) {
    task.status = 'Done';
  }
}
