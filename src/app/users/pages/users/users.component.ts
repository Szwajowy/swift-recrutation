import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { CreateUserComponent } from '../../dialogs/create-user/create-user.component';
import { RemoveUserComponent } from '../../dialogs/remove-user/remove-user.component';
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

  constructor(private dialog: MatDialog, private usersService: UsersService) {}

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
      if (!data) return;

      this.usersService
        .createUser(data)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          if (this.users?.length > 0) {
            this.users.push(data);
            this.users = [...this.users];
          }
        });
    });
  }

  onRemoveUser(user: User): void {
    const dialogRef = this.dialog.open(RemoveUserComponent, {
      width: '450px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((remove) => {
      if (!remove) return;

      this.usersService
        .removeUser(user.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          if (this.users?.length > 0) {
            const userIndex = this.users.findIndex(
              (user) => user.id === user.id
            );
            this.users.splice(userIndex, 1);
            this.users = [...this.users];
          }
        });
    });
  }
}
