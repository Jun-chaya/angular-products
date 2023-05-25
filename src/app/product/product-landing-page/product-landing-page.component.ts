import { Component } from '@angular/core';
import { ProductDisplayComponent } from '../product-display/product-display.component';

@Component({
  selector: 'app-product-landing-page',
  templateUrl: './product-landing-page.component.html',
  styleUrls: ['./product-landing-page.component.scss'],
})
export class ProductLandingPageComponent extends ProductDisplayComponent {}
