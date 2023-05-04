import { Injectable } from '@angular/core';
import { allProduct } from './product';

import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class ProductService {  
  private productURL = 'https://dummyjson.com/products';

  constructor(private http:HttpClient) {}


  getAllProducts(): Observable<allProduct>{
    return this.http.get<allProduct>(this.productURL);}

 /* getProduct(id: number): Observable<product> {
      return this.http.get<product>(`${this.productURL}/${id}`);
    }*/
}
