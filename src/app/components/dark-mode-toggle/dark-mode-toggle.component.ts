import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  templateUrl: './dark-mode-toggle.component.html',
  styleUrl: './dark-mode-toggle.component.css'
})
export class DarkModeToggleComponent implements OnInit {
  isDark = false;

  ngOnInit() {
    this.isDark = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    const html = document.documentElement;
    if (this.isDark) html.classList.add('dark');
    else html.classList.remove('dark');
  }

}
