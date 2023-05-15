import { Injectable } from '@angular/core';
import { User, allUser } from '../model/user';

import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userURL = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  GetAllUsers(): Observable<allUser> {
    return this.http
      .get<allUser>(this.userURL)
      .pipe(catchError(this.handleError<allUser>('getAllUsers')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  searchUser(term: string): Observable<allUser> {
    return this.http
      .get<allUser>(`${this.userURL}/search?q=${term}`)
      .pipe(catchError(this.handleError<allUser>('searchUser')));
  }
}
