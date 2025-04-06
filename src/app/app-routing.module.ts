import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/admin-dashboard.component';
import { AdminManageUserComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/Admin-Manage-User/admin-manage-user/admin-manage-user.component';
import { AdminManageCourseComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/admin-Manage-Course/admin-manage-course/admin-manage-course.component';
import { AdminReportsComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/Admin-Reports/admin-reports/admin-reports.component';
import { AdminSettingsComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/Admin-Settings/admin-settings/admin-settings.component';
import { TeacherDashboardComponent } from './TeacherComponent/Teacher-Dashboard/teacher-dashboard/teacher-dashboard.component';
import { TeacherCourseComponent } from './TeacherComponent/Teacher-Course/teacher-course/teacher-course.component';
import { TeacherAssignmentsComponent } from './TeacherComponent/Teacher-Assignments/teacher-assignments/teacher-assignments.component';
import { TeacherCreateAssignmentsComponent } from './TeacherComponent/Teacher-Create-Assignments/teacher-create-assignments/teacher-create-assignments.component';
import { TeacherViewAssignmentComponent } from './TeacherComponent/Teacher-View-Assignment/teacher-view-assignment/teacher-view-assignment.component';
import { TeacherCreateCourseComponent } from './TeacherComponent/Teacher-Create-Course/teacher-create-course/teacher-create-course.component';
import { TeacherViewCourseComponent } from './TeacherComponent/teacher-View-Course/teacher-view-course/teacher-view-course.component';
import { StudentDashboardComponent } from './StudentComponent/Student-Dashbaord/student-dashboard/student-dashboard.component';
import { StudentCourseComponent } from './StudentComponent/Student-Course/student-course/student-course.component';
import { StudentAssignmentsComponent } from './StudentComponent/Student-Assignments/student-assignments/student-assignments.component';
import { StudentHomeworkComponent } from './StudentComponent/Student-Homwork/student-homework/student-homework.component';
import { ChatBoxComponent } from './StudentComponent/Chat-Box/chat-box/chat-box.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'adminManageUser', component: AdminManageUserComponent },
  { path: 'adminManageCourse', component: AdminManageCourseComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  {path:"reports",component:AdminReportsComponent},
  {path:"settings",component:AdminSettingsComponent},
  {path:"teacherdashboard",component:TeacherDashboardComponent},
  {path:"myCourse",component:TeacherCourseComponent},
  {path:"assignment",component:TeacherAssignmentsComponent},
  {path:"addAssignments",component:TeacherCreateAssignmentsComponent},
  {path:"viewAssignments",component:TeacherViewAssignmentComponent},
  {path:"createCourse",component:TeacherCreateCourseComponent},
  {path:"StudentDashboard",component:StudentDashboardComponent},
{path:"teacherCreateCourse",component:TeacherCreateCourseComponent},
{path:"teacherCourse",component:TeacherCourseComponent},
{path:"viewCourses",component:TeacherViewCourseComponent},
{path:"StudentCourse",component:StudentCourseComponent},
{path:"StudentAssignment",component:StudentAssignmentsComponent},
{path:"StudnetHomeWork",component:StudentHomeworkComponent},
{path:"Char-Box",component:ChatBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
