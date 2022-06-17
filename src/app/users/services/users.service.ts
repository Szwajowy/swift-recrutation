import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateUserService } from '../api/create-user.service';

import { GetAllUsersService } from '../api/get-all-users.service';
import { User } from '../models/Users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private getAllUsersService: GetAllUsersService,
    private createUserService: CreateUserService
  ) {}

  getAllUsers(): Observable<User[]> {
    return this.getAllUsersService
      .getAllUsers()
      .pipe(map((users: User[]) => users.filter((user) => !user.isRemoved)));
  }

  createUser(user: User): Observable<User> {
    return this.createUserService.createUser(user);
  }

  removeUser(id: number): void {}
}
