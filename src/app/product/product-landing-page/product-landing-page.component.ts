import { Component } from '@angular/core';
import { ProductDisplayComponent } from '../product-display/product-display.component';

@Component({
  selector: 'app-product-landing-page',
  templateUrl: './product-landing-page.component.html',
  styleUrls: ['./product-landing-page.component.css']
})
export class ProductLandingPageComponent extends ProductDisplayComponent{
  myTheme: string = "light";

  onSwitch() {
    if (this.myTheme === "light")
      this.myTheme = "dark";
    else
      this.myTheme = "light";
  }
}
