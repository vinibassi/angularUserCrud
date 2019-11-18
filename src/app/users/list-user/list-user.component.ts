import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { UserServiceService } from './../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users = [];

  constructor(private http: HttpClient, private service: UserServiceService) { }

  ngOnInit() {
    this.service.userList().subscribe(result => this.users = result);
  }

}
