import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-manage-course',
  standalone: false,
  templateUrl: './admin-manage-course.component.html',
  styleUrl: './admin-manage-course.component.css'
})
export class AdminManageCourseComponent {
    // Dummy course data with an "approved" property
    courses = [
      {
        id: 1,
        title: 'Angular Basics',
        instructor: 'Angular Sir',
        duration: 10,
        topic: 'Frontend',
        approved: false
      },
      {
        id: 2,
        title: 'Spring Boot API',
        instructor: 'Parin Sir',
        duration: 15,
        topic: 'Backend',
        approved: false
      },
      {
        id: 3,
        title: 'Database Design',
        instructor: 'Parin Sir  ',
        duration: 8,
        topic: 'Database',
        approved: false
      }
    ];
  
    searchTerm = '';
    showForm = false;
    isEdit = false;
    selectedCourse = { id: 0, title: '', instructor: '', duration: 0, topic: '', approved: false };
  
    // Filters courses based on the search term
    filteredCourses() {
      const term = this.searchTerm.toLowerCase();
      return this.courses.filter(course =>
        course.title.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term) ||
        course.topic.toLowerCase().includes(term)
      );
    }
  
    // Opens the form for adding a new course
    openAddCourse() {
      this.showForm = true;
      this.isEdit = false;
      this.selectedCourse = { id: 0, title: '', instructor: '', duration: 0, topic: '', approved: false };
    }
  
    // Opens the form for editing an existing course
    editCourse(course: any) {
      this.showForm = true;
      this.isEdit = true;
      this.selectedCourse = { ...course };
    }
  
    // Saves the course; adds or updates depending on isEdit flag
    saveCourse() {
      if (this.isEdit) {
        const index = this.courses.findIndex(c => c.id === this.selectedCourse.id);
        if (index > -1) {
          this.courses[index] = { ...this.selectedCourse };
        }
      } else {
        const newId = Math.max(...this.courses.map(c => c.id), 0) + 1;
        this.courses.push({ ...this.selectedCourse, id: newId });
      }
      this.cancel();
    }
  
    // Deletes a course after confirmation
    deleteCourse(course: any) {
      if (confirm('Are you sure you want to delete this course?')) {
        this.courses = this.courses.filter(c => c.id !== course.id);
      }
    }
  
    // Approves the selected course
    approveCourse(course: any) {
      course.approved = true;
      alert(`Course "${course.title}" has been approved!`);
    }
  
    // Rejects the selected course (here we simply mark it as not approved)
    rejectCourse(course: any) {
      course.approved = false;
      alert(`Course "${course.title}" has been rejected!`);
    }
  
    // Cancels the add/edit operation and resets the form
    cancel() {
      this.showForm = false;
      this.selectedCourse = { id: 0, title: '', instructor: '', duration: 0, topic: '', approved: false };
    }
}


