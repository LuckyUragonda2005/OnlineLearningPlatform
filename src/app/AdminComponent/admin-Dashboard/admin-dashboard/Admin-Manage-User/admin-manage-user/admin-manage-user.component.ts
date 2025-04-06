import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-manage-user',
  standalone: false,
  templateUrl: './admin-manage-user.component.html',
  styleUrl: './admin-manage-user.component.css'
})
export class AdminManageUserComponent {
  users: any[] = [
    { id: 1, name: 'Lucky', email: 'lucky@gmail.com', role: 'Student' },
    { id: 2, name: ' Chintu', email: 'chintu@gmail.com', role: 'Teacher' },
    { id: 3, name: ' Sanjeev', email: 'sanjeev@gmail.com', role: 'Student' },
    { id: 4, name: ' Prachi', email: 'prachi@gmail.com', role: 'Teacher' },
    { id: 5, name: ' Harshada', email: 'harshada@gmail.com', role: 'Teacher' }


  ];

  filteredUsers: any[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.filteredUsers = [...this.users];
  }

  filterUsers(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  }

  deleteUser(userId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      this.users = this.users.filter(user => user.id !== userId);
      this.filterUsers(); 
    }
  }

  refreshUsers(): void {
    this.searchTerm = '';
    this.filteredUsers = [...this.users];
  }

  editUser(user: any): void {
    alert(`Edit feature not implemented. You clicked on: ${user.name}`);
  }
}
