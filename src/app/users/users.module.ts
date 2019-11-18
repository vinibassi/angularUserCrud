import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ CreateUserComponent, ListUserComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ CreateUserComponent, ListUserComponent]
})
export class UsersModule { }
