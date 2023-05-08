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

  goAddProduct(product: product): void {
    this.ProductService.addProduct(product).subscribe((product) => {
      this.products.push(product);
    });
  }

  goUpdateProduct(product: product): void {
    this.ProductService.updateProduct(product.id,product).subscribe((product) => {
      this.products.push(product);
    });
  }

  goDeleteProduct(id: number): void {
    this.ProductService.deleteProduct(id).subscribe((product) => {
      this.products = this.products.filter((product) => product.id !== id);
    });
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
      while (stars.length < 5) {
        stars += '☆';
      }
    }

    return stars;
  }

  ngOnInit() {
    this.goGetProducts();
    let product1 = {
      id: 30,
      title: 'Product 1',
      category: 'Category 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug',
      price: 100,
      discountPercentage: 0,
      rating: 0,
      stock: 100,
      brand: 'Brand 1',
      thumbnail: 'https://via.placeholder.com/150',
      images: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
      ],
    };
    this.goAddProduct(product1);
    let product2 = product1;

    //product2.id = Number(7);
    product2.title = 'Product 7 modified';
    console.log(product2);
    this.goDeleteProduct(7);
    this.goUpdateProduct(product1);
  }
}
