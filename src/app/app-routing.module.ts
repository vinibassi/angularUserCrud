import { ListUserComponent } from './users/list-user/list-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'users/list', component: ListUserComponent },
  // { path: 'users/list', component: ListUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
