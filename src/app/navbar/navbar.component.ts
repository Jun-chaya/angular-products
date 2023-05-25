import { Component, Inject, Renderer2 } from '@angular/core';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';
import { TranslateService } from '@ngx-translate/core';
import { UserTableViewComponent } from '../user-table-view/user-table-view.component';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public myTheme: string;
  constructor(
    private DarkModeService: DarkModeService,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
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

    document.documentElement.setAttribute('data-bs-theme', 'light');
    this.document.documentElement.classList.remove('dark-theme');
  }

  onSwitchDark(): void {
    this.DarkModeService.setTheme('dark');
    this.DarkModeService.getTheme().subscribe((data) => (this.myTheme = data));

    document.documentElement.setAttribute('data-bs-theme', 'dark');
    this.document.documentElement.classList.add('dark-theme');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
