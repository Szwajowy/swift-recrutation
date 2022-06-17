import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { User } from '../../models/Users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'city',
    'region',
    'country',
  ];
  dataSource: User[] = [];

  private destroy$ = new Subject();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService
      .getAllUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users) => {
        this.dataSource = users;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }
}
