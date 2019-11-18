import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:5000/api/Users/';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  postUserCreate(user: User) {

    return this.http.post(apiUrl + 'create', user);
  }
  userList() {

    return this.http.get<User[]>(apiUrl);
  }
}
