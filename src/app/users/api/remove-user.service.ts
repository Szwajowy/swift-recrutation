import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, API_ENDPOINTS } from '../constants/API_URLs';
import { User } from '../models/Users.model';

@Injectable({
  providedIn: 'root',
})
export class RemoveUserService {
  constructor(private http: HttpClient) {}

  removeUser(id: number): Observable<User> {
    return this.http.delete<User>(API_URL + API_ENDPOINTS.users + '/' + id);
  }
}
