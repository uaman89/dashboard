import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import { UsersGridModule } from "../../../features/users/users-grid/users-grid.module";
import { UsersStoreModule } from "../../../enttities/users/users-store/users-store.module";



@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersStoreModule,
    UsersGridModule,
  ]
})
export class UsersPageModule { }
