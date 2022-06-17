import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { CreateUserComponent } from '../../dialogs/create-user/create-user.component';
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

  constructor(public dialog: MatDialog, private usersService: UsersService) {}

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

  onAddUser(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (this.users?.length > 0) {
        this.users.push(data);
      }

      this.usersService
        .createUser(data)
        .pipe(takeUntil(this.destroy$))
        .subscribe();
    });
  }
}
