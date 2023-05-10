import { Injectable } from '@angular/core';
import { allProduct, product } from './product';

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
    return this.http
      .get<allProduct>(this.productURL)
      .pipe(catchError(this.handleError<allProduct>('getAllProducts')));
  }

  getProduct(id: number): Observable<product> {
    return this.http.get<product>(`${this.productURL}/${id}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.productURL}/categories`);
  }

  addProduct(product: product): Observable<product> {
    return this.http.post<product>(`${this.productURL}/add`, product);
    //.pipe(catchError(this.handleError<product>('addProduct')));
  }

  updateProduct(product: product): Observable<product> {
    return this.http
      .put<product>(`${this.productURL}/${product.id}`, product)
      .pipe(catchError(this.handleError<product>('updateProduct')));
  }

  deleteProduct(id: number): Observable<product> {
    return this.http.delete<product>(`${this.productURL}/${id}`);
    //.pipe(catchError(this.handleError<product>('deleteProduct')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  searchProducts(term: string): Observable<allProduct> {
    return this.http.get<allProduct>(`${this.productURL}/search?q=${term}`);
  }

  productsByCategory(category: string): Observable<allProduct> {
    return this.http.get<allProduct>(`${this.productURL}/category/${category}`);
  }
}
