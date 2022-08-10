import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../../features/auth/auth.module';
import { AuthPageComponent } from './auth-page.component';



@NgModule({
  declarations: [ AuthPageComponent],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class AuthPageModule { }
