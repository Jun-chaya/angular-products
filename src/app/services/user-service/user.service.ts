import { Injectable } from '@angular/core';
import { User, allUser } from '../../model/user';

import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userURL = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  GetAllUsers(): Observable<allUser> {
    return this.http.get<allUser>(this.userURL);
  }

  searchUser(term: string): Observable<allUser> {
    return this.http.get<allUser>(`${this.userURL}/search?q=${term}&limit=10`);
  }

  getSomeUsers(page: number): Observable<allUser> {
    return this.http.get<allUser>(`${this.userURL}?limit=10&skip=${page}`);
  }

  addUser(User: User): Observable<User> {
    return this.http.post<User>(`${this.userURL}/add`, User);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.userURL}/${id}`);
  }
}
