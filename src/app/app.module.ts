import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/admin-dashboard.component';
import { AdminManageUserComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/Admin-Manage-User/admin-manage-user/admin-manage-user.component';
import { AdminManageCourseComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/admin-Manage-Course/admin-manage-course/admin-manage-course.component';
import { AdminReportsComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/Admin-Reports/admin-reports/admin-reports.component';
import { AdminSettingsComponent } from './AdminComponent/admin-Dashboard/admin-dashboard/Admin-Settings/admin-settings/admin-settings.component';
import { TeacherDashboardComponent } from './TeacherComponent/Teacher-Dashboard/teacher-dashboard/teacher-dashboard.component';
import { TeacherCourseComponent } from './TeacherComponent/Teacher-Course/teacher-course/teacher-course.component';
import { TeacherAssignmentsComponent } from './TeacherComponent/Teacher-Assignments/teacher-assignments/teacher-assignments.component';
import { StudentDashboardComponent } from './StudentComponent/Student-Dashbaord/student-dashboard/student-dashboard.component';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { TeacherCreateAssignmentsComponent } from './TeacherComponent/Teacher-Create-Assignments/teacher-create-assignments/teacher-create-assignments.component';
import { TeacherViewAssignmentComponent } from './TeacherComponent/Teacher-View-Assignment/teacher-view-assignment/teacher-view-assignment.component';
import { TeacherCreateCourseComponent } from './TeacherComponent/Teacher-Create-Course/teacher-create-course/teacher-create-course.component';
import { TeacherViewCourseComponent } from './TeacherComponent/teacher-View-Course/teacher-view-course/teacher-view-course.component';
import { StudentCourseComponent } from './StudentComponent/Student-Course/student-course/student-course.component';
import { StudentAssignmentsComponent } from './StudentComponent/Student-Assignments/student-assignments/student-assignments.component';
import { StudentHomeworkComponent } from './StudentComponent/Student-Homwork/student-homework/student-homework.component';
import { ChatBoxComponent } from './StudentComponent/Chat-Box/chat-box/chat-box.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminManageUserComponent,
    AdminManageCourseComponent,
    AdminReportsComponent,
    AdminSettingsComponent,
    TeacherDashboardComponent,
    TeacherCourseComponent,
    TeacherAssignmentsComponent,
    StudentDashboardComponent,
    TeacherCreateAssignmentsComponent,
    TeacherViewAssignmentComponent,
    TeacherCreateCourseComponent,
    TeacherViewCourseComponent,
    StudentCourseComponent,
    StudentAssignmentsComponent,
    StudentHomeworkComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
