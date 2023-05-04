import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { allProduct, product } from '../product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent implements OnInit {
  products: product[] = [];

  constructor(private ProductService: ProductService) {}

  goGetProducts(): void {
    this.ProductService.getAllProducts()
      .subscribe((Allproducts) => (this.products = Allproducts.products))
      .add(() => console.log(this.products));
  }

  truncate(n1: number): number {
    return Math.floor(n1 * 100) / 100;
  }

  numberToStars(n: number): string {
    let stars = '';
    let decimals: number = n - Math.floor(n);

    for (let i = 1; i <= 5; i++) {
      if (i < n) {
        stars += '★';
      }
     
    }
    if (decimals >= 0.3 && decimals < 0.8) {
      stars += '⯨';
    } else if (n - Math.floor(n) >= 0.8) {
      stars += '★';
    } else {
      while(stars.length < 5) {
      stars += '☆';}
    }

    return stars;
  }

  ngOnInit() {
    this.goGetProducts();
  }
}
