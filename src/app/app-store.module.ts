import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './enttities/auth/store/auth.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      auth: authReducer
    },
      // todo: read about config
      {})

  ]
})
export class AppStoreModule { }
