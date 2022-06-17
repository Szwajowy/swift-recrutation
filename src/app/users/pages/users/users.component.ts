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
  loading = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  onLoadUsers(): void {
    this.loading = true;
    this.usersService
      .getAllUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users) => {
        this.loading = false;
        this.users = users;
      });
  }
}
