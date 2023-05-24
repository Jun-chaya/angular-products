import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service/product.service';
import { allProduct, product } from '../../model/product';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { __await } from 'tslib';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';
@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss'],
})
export class ProductDisplayComponent implements OnInit {
  id: number = 0;
  log: string = '';

  isDataLoaded$: Subscription;
  public totalProducts: product[] = [];
  public products: product[] = [];
  public categories: string[] = [];
  public temp: product[] = [];
  private itemsPage: number = 12;
  myTheme: string;

  constructor(
    protected ProductService: ProductService,
    private route: ActivatedRoute,
    private DarkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.goGetCategories();
    this.goGetProductsForSearch();
    if (this.route.snapshot.fragment!) {
      const category = this.route.snapshot.fragment!;
      this.goGetProductCategory(category);
    } else {
      this.goGetProducts();
      this.goGetProductsPaginated();
    }

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

  private goGetProductsForSearch() {
    this.isDataLoaded$ = this.ProductService.getAllProducts().subscribe({
      next: (allProducts) => (this.temp = allProducts.products),
      error: (err) => console.error('Error in goGetProducts'),
      complete: () => console.log('Completed goGetProductsForSearch'),
    });
  }

  goGetProducts(): void {
    this.isDataLoaded$ = this.ProductService.getAllProducts().subscribe({
      next: (allProducts) => (this.totalProducts = allProducts.products),
      error: (err) => console.error('Error in goGetProducts'),
      complete: () => console.log('Completed goGetProducts'),
    });
  }

  goGetCategories(): void {
    this.isDataLoaded$ = this.ProductService.getCategories().subscribe({
      next: (categories) => (this.categories = categories),
      error: (err) => console.error('Error in getCategories' + err),
      complete: () => console.log('Completed getCategories'),
    });
  }

  goGetProductsPaginated() {
    const pageNum = Number(this.route.snapshot.paramMap.get('page'));
    const numItems = this.itemsPage;
    const skipNumber = (pageNum - 1) * 10;

    this.isDataLoaded$ = this.ProductService.productsPaginated(
      numItems,
      skipNumber
    ).subscribe({
      next: (allProducts) => (this.products = allProducts.products),
      error: (err) => console.error('Error in getPaginated' + err),
      complete: () => console.log('Completed goGetProductsPaginated'),
    });
  }

  goGetProductCategory(category: string) {
    this.isDataLoaded$ = this.ProductService.productsByCategory(
      category
    ).subscribe({
      next: (allProducts) => (this.products = allProducts.products),
      error: (err) => console.error('Error in goGetProductCategory' + err),
      complete: () => console.log('Completed goGetProductCategory'),
    });
  }

  search(term: string) {
    let productSearch = new ProductSearchComponent(this.ProductService);
    this.isDataLoaded$ = productSearch.search(term).subscribe({
      next: (allProducts) => (this.products = allProducts.products),
      error: (err) => console.error('Error in Search', err),
      complete: () => console.log('Completed Search'),
    });
  }

  filterByPrice(priceMin: number, priceMax: number) {
    this.products = this.temp.filter(
      (p) =>
        this.aplicaDescuento(p) <= priceMax &&
        this.aplicaDescuento(p) >= priceMin
    );
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
}
