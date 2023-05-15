import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { User, allUser } from '../model/user';
import { UserSearchComponent } from '../user-search/user-search.component';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  public users: User[] = [];

  constructor(protected UserService: UserService) {}

  ngOnInit(): void {
    this.goGetAllUsers();
  }

  goGetAllUsers(): void {
    try {
      this.UserService.GetAllUsers().subscribe(
        (allUsers) => (this.users = allUsers.users)
      );
    } catch (error) {
      console.log(error);
    }
  }

  goSearchUser(term: string): void {
    let userSearch = new UserSearchComponent(this.UserService);
    userSearch
      .search(term)
      .subscribe((allUser) => (this.users = allUser.users));
  }
}
