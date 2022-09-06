import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { usersFeature } from "./users.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UsersEffects } from "./users.effect";
import { HttpClientModule } from "@angular/common/http";
import { UsersApiService } from "../users-api.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule, // todo: ASK - is this correct place to import HTTP module?
    StoreModule.forFeature(usersFeature),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [
    UsersApiService // todo: ASK - is this correct place to provide this service?
  ]
})
export class UsersStoreModule { }
