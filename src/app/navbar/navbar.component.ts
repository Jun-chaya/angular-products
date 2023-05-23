import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private DarkModeService: DarkModeService) {
    this.DarkModeService.getTheme().subscribe(
      (theme) => (this.myTheme = theme)
    );
  }
  myTheme: string;
  onSwitch() {
    if (this.myTheme == 'light') {
      this.DarkModeService.setTheme('dark');

      this.DarkModeService.getTheme().subscribe(
        (data) => (this.myTheme = data)
      );
    } else {
      this.DarkModeService.setTheme('light');

      this.DarkModeService.getTheme().subscribe(
        (data) => (this.myTheme = data)
      );
    }
  }
}
