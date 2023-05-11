import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { allProduct, product } from '../model/product';
import { RouterModule } from '@angular/router';
import { Observable, Subject, Subscribable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
})
export class ProductSearchComponent implements OnInit {
  products: product[] = [];
  AllProducts: allProduct[] = [];

  constructor(private ProductService: ProductService) {}

  search(term: string) : Observable<allProduct>{
    return this.ProductService.searchProducts(term);
    }

  ngOnInit(): void {
    this.search('');
  }
}
