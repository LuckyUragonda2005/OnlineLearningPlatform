import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-reports',
  standalone: false,
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css'
})
export class AdminReportsComponent {

  selectedReportType: string = '';

  reports = [
    { title: 'New Users Report', type: 'user', description: 'Details of new users', date: '2025-04-01' },
    { title: 'Top Courses', type: 'course', description: 'Most enrolled courses', date: '2025-03-25' },
    { title: 'Revenue Summary', type: 'revenue', description: 'Monthly revenue overview', date: '2025-03-30' },
    { title: 'Activity Logs', type: 'activity', description: 'Recent user activity logs', date: '2025-04-02' },
    { title: 'Performance Metrics', type: 'performance', description: 'System performance statistics', date: '2025-04-03' },
  ];

  get filteredReports() {
    if (!this.selectedReportType) {
      return this.reports;
    }
    return this.reports.filter(report => report.type === this.selectedReportType);
  }

  viewReport(report: any) {
    alert(`Viewing report: ${report.title}`);
  }
}

