import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { GetAllUsersService } from '../api/get-all-users.service';
import { User } from '../models/Users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private getAllUsersService: GetAllUsersService) {}

  getAllUsers(): Observable<User[]> {
    return this.getAllUsersService
      .getAllUsers()
      .pipe(map((users: User[]) => users.filter((user) => !user.isRemoved)));
  }

  removeUser(id: number): void {}
}
