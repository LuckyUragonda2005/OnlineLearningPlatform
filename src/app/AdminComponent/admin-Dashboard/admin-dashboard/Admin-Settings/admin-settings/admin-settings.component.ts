import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-settings',
  standalone: false,
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.css'
})
export class AdminSettingsComponent {
  settings = {
    theme: 'light',
    language: 'en'
  };

  editProfile() {
    alert('Edit profile clicked!');
  }

  changePassword() {
    alert('Change password clicked!');
  }

  toggleTheme() {
    this.settings.theme = this.settings.theme === 'light' ? 'dark' : 'light';
  }

  logout() {
    alert('Logged out!');
  }
}
