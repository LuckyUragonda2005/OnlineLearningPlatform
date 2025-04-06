import { Component } from '@angular/core';

@Component({
  selector: 'app-student-course',
  standalone: false,
  templateUrl: './student-course.component.html',
  styleUrl: './student-course.component.css'
})
export class StudentCourseComponent {
  courses = [
    {
      title: 'Mastering JavaScript',
      description: 'Learn the most powerful programming language for the web.',
      category: 'Programming',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:800/1*FejIUfRkLTdjDmCU_vB2BQ.png',
      isStarted: false
    },
    {
      title: 'Introduction to Data Science',
      description: 'Start your journey in data science with Python and Pandas.',
      category: 'Data Science',
      thumbnail: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2020/10/data-science.jpg',
      isStarted: true
    },
    {
      title: 'Creative UI/UX Design',
      description: 'Design interfaces that engage users and tell stories.',
      category: 'Design',
      thumbnail: '',
      isStarted: false
    },
    {
      title: 'Creative UI/UX Design',
      description: 'Design interfaces that engage users and tell stories.',
      category: 'Design',
      thumbnail: '',
      isStarted: false
    },
    {
      title: 'Creative UI/UX Design',
      description: 'Design interfaces that engage users and tell stories.',
      category: 'Design',
      thumbnail: '',
      isStarted: false
    },
    {
      title: 'Creative UI/UX Design',
      description: 'Design interfaces that engage users and tell stories.',
      category: 'Design',
      thumbnail: '',
      isStarted: false
    },
    {
      title: 'Creative UI/UX Design',
      description: 'Design interfaces that engage users and tell stories.',
      category: 'Design',
      thumbnail: '',
      isStarted: false
    },
    {
      title: 'Creative UI/UX Design',
      description: 'Design interfaces that engage users and tell stories.',
      category: 'Design',
      thumbnail: '',
      isStarted: true
    },
    {
      title: 'Creative UI/UX Design',
      description: 'Design interfaces that engage users and tell stories.',
      category: 'Design',
      thumbnail: '',
      isStarted: false
    },
  ];

  ngOnInit(): void {}

  startCourse(course: any) {
    alert(`Opening course: ${course.title}`);
    // Navigate to course details or player
  }
}
