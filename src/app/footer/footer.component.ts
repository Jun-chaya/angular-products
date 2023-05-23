import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  myTheme: string;
  constructor(private DarkModeService : DarkModeService){}
  ngOnInit(): void {
    if (
      this.DarkModeService.getTheme().subscribe(
        (theme) => (this.myTheme = theme)
      )
    ) {
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
