import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user-service/user.service';
import { Observable } from 'rxjs';
import { allUser } from '../model/user';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  constructor(private UserService: UserService) {}

  search(term: string): Observable<allUser> {
    return this.UserService.searchUser(term);
  }

  ngOnInit(): void {
    this.search('');
  }

  
}
