import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFeatureModule } from '../../features/auth/auth-feature.module';
import { AuthPageComponent } from './auth-page.component';



@NgModule({
  declarations: [ AuthPageComponent],
  imports: [
    CommonModule,
    AuthFeatureModule
  ]
})
export class AuthPageModule { }
