import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private DarkModeService: DarkModeService) {
    this.DarkModeService.getTheme().subscribe(
      (theme) => (this.myTheme = theme)
    );
  }
  myTheme: string;
  onSwitchLight(): void{
    this.DarkModeService.setTheme('light');
    this.DarkModeService.getTheme().subscribe(
      (data) => (this.myTheme = data))
  }

   onSwitchDark(): void{
    this.DarkModeService.setTheme('dark');
    this.DarkModeService.getTheme().subscribe(
      (data) => (this.myTheme = data))
  }
 
}
