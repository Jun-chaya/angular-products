import { Component, Renderer2 } from '@angular/core';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public myTheme: string;
  constructor(
    private DarkModeService: DarkModeService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('es');
    this.DarkModeService.getTheme().subscribe(
      (theme) => (this.myTheme = theme)
    );
  }
  
  onSwitchLight(): void {
    this.DarkModeService.setTheme('light');
    this.DarkModeService.getTheme().subscribe((data) => (this.myTheme = data));

     document.documentElement.setAttribute('data-bs-theme', 'light')
  }

  onSwitchDark(): void {
    this.DarkModeService.setTheme('dark');
    this.DarkModeService.getTheme().subscribe((data) => (this.myTheme = data));
    
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
