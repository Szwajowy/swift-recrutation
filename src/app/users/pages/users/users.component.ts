import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../models/Users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  users!: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  loadUsers(): void {
    this.usersService
      .getAllUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users) => {
        this.users = users;
      });
  }
}
