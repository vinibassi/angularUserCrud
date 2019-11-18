import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user = new User();

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UserServiceService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['']
    });

  }
  create() {
    this.service
      .postUserCreate(this.user)
      .subscribe();
  }

}
