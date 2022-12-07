import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';
import { DashboardPageModule } from './pages/dashboard/dashboard-page.module';
import { AuthPageModule } from './pages/auth/auth-page.module';
import { environment } from '../environments/environment';
import { authReducer } from './enttities/auth/store/auth.reducer';
import { AUTH_STORE_KEY } from './enttities/auth/store/auth.enums';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './enttities/auth/store/auth.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    AuthModule.forRoot(environment.auth),
    StoreModule.forRoot({[AUTH_STORE_KEY]: authReducer,},),
    EffectsModule.forRoot([AuthEffects]),

    // todo: ASK - is this a correct way to use ReduxDevTools? is it ReduxDevTools extensions should be used, or another one?
    StoreDevtoolsModule.instrument({
      name: 'Dashboard App',
      logOnly: environment.production
    }),

    HeaderModule,
    AuthPageModule,
    DashboardPageModule,
  ],
  providers: [
    {
      provide: 'API_BASE',
      useValue: environment.apiBaseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
