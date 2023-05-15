import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { allProduct, product } from '../model/product';
import { RouterModule } from '@angular/router';
import { auditTime, timestamp } from 'rxjs';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { __await } from 'tslib';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent implements OnInit {
  id: number = 0;
  log: string = '';

  public totalProducts: product[] = [];
  public products: product[] = [];
  public categories: string[] = [];
  public temp: product[] = [];
  private itemsPage: number = 10;

  constructor(
    protected ProductService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.goGetProducts();
    this.goGetCategories();
    this.goGetProductsByParameters();
  }

  goGetProducts(): void {
    try {
      this.ProductService.getAllProducts().subscribe(
        (allProducts) => (this.totalProducts = allProducts.products)
      );
    } catch (error) {
      console.log("Couldn't fetch products");
    }
  }

  goGetCategories(): void {
    try {
      this.ProductService.getCategories().subscribe((categories) => {
        this.categories = categories;
      });
    } catch (error) {
      console.log("Couldn't fetch categories");
    }
  }

  aplicaDescuento(product: product): number {
    var n1 = product.price * ((100 - product.discountPercentage) / 100);
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

  goGetProductCategory(category: string) {
    try {
      this.ProductService.productsByCategory(category).subscribe(
        (allProducts) => (this.products = allProducts.products)
      );
    } catch (error) {
      console.log("Couldn't fetch products in ", category, ' category');
    }
  }

  filterByPrice(priceMin: number, priceMax: number) {
    try {
      this.ProductService.getAllProducts().subscribe(
        (allProducts) => (this.temp = allProducts.products)
      );

   
      this.products = this.temp.filter(
        (p) =>
          this.aplicaDescuento(p) <= priceMax &&
          this.aplicaDescuento(p) >= priceMin
      );
    } catch (error) {
      console.log("No objects in that price point or, couldn't fetch them");
    }
  }

  search(term: string) {
    let productSearch = new ProductSearchComponent(this.ProductService);
    productSearch
      .search(term)
      .subscribe((allProducts) => (this.products = allProducts.products));
  }

  goGetProductsByParameters() {
    try {
      const pageNum = Number(this.route.snapshot.paramMap.get('page'));
      const numItems = this.itemsPage;
      const skipNumber = (pageNum - 1) * 10;
      this.ProductService.productsByParameters(numItems, skipNumber).subscribe(
        (allProducts) => (this.products = allProducts.products)
      );
    } catch {
      console.log("Couldn't fetch products by parameters");
    }
  }
}
