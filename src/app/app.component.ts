import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-products';
  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
    translate.use('en')
  }
  }
  

