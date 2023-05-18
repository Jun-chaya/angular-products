import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { allUser, User } from '../model/user';
import { UserService } from '../services/user-service/user.service';
import { delay } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-table-view',
  templateUrl: './user-table-view.component.html',
  styleUrls: ['./user-table-view.component.css'],
})
export class UserTableViewComponent implements OnInit {
  isDataLoaded$: Subscription;
  displayedcolumns = ['id', 'firstName', 'lastName', 'email'];
  public idt = 101;
  users: User[] = [];
  dataSource!: MatTableDataSource<User>;
  firstName: string;
  lastName: string;
  email: string;
  idb: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;

  constructor(
    protected UserService: UserService,
    private _snackBar: MatSnackBar
  ) {
    this.isDataLoaded$ = this.UserService.GetAllUsers().subscribe((allUsers) => {
      this.users.push(...allUsers.users);
    });

    for (let i = 3; i < 11; i++) {
      var p = i * 10;
      this.UserService.getSomeUsers(p)
        .pipe(delay(100))
        .subscribe((someUsers) => {
          this.users.push(...someUsers.users);
        });
    }
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<User>(this.users);
    }, 100);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 1000);
  }
  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  addUser() {
    const user: User = {
      id: this.idt,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };
    if (user.firstName?.length && user.lastName?.length && user.email?.length) {
      this.idt++;
      this.UserService.addUser(user);
      this.dataSource.data = [...this.dataSource.data, user];
      this.openSnackBar('User added', 'Dismiss');
    } else {
      this.openSnackBar(
        'Could not add user, insufficient parameters',
        'Dismiss'
      );
    }
  }

  removeData(idb: number) {
    this.UserService.deleteUser(idb).subscribe({
      next: () => {},
      error: (err) => {
        console.error('Error in deleting user' + err);
        this.openSnackBar('Error deleting user', 'Dismiss');
      },
      complete: () => {
        if (idb > this.dataSource.data.length) {
          this.openSnackBar('Error deleting user', 'Dismiss');
        } else this.openSnackBar('User removed', 'Dismiss');
        this.dataSource.data = this.dataSource.data
          .slice(0, idb - 1)
          .concat(this.dataSource.data.slice(idb));
      },
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
