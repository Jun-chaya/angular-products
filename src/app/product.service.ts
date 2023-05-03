import { Injectable } from '@angular/core';
import { product } from './product';
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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getProducts(): Observable<product[]>{
    return this.http.get<product[]>(this.productURL).pipe(
      
      (tap(data => console.log('All ', JSON.stringify(data))))
    );
  }
}
