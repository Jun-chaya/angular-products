import { Injectable } from '@angular/core';
import { allProduct, product } from '../../model/product';

import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private productURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<allProduct> {
    return this.http.get<allProduct>(this.productURL);
  }

  getProduct(id: number): Observable<product> {
    return this.http.get<product>(`${this.productURL}/${id}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.productURL}/categories`);
  }

  addProduct(product: product): Observable<product> {
    return this.http.post<product>(`${this.productURL}/add`, product);
  }

  updateProduct(product: product): Observable<product> {
    return this.http.put<product>(`${this.productURL}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<product> {
    return this.http.delete<product>(`${this.productURL}/${id}`);
  }

  searchProducts(term: string): Observable<allProduct> {
    return this.http.get<allProduct>(`${this.productURL}/search?q=${term}`);
  }

  productsByCategory(category: string): Observable<allProduct> {
    return this.http.get<allProduct>(`${this.productURL}/category/${category}`);
  }

  productsPaginated(numItems: number,skipNumber: number): Observable<allProduct> {
    return this.http.get<allProduct>(`${this.productURL}?limit=${numItems}&skip=${skipNumber}`);
  }
}
