import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS, API_URL } from '../constants/API_URLs';
import { User } from '../models/Users.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllUsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + API_ENDPOINTS.users);
  }
}
