import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { DashboardPageModule } from './pages/dashboard/dashboard-page.module';
import { AuthPageModule } from './pages/auth/auth-page.module';
import { environment } from '../environments/environment';
import { authReducer } from './enttities/auth/store/auth.reducer';
import { AUTH_STORE_KEY } from './enttities/auth/store/auth.enums';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    AuthModule.forRoot(environment.auth),
    //AppStoreModule,
    // todo: ASK - is it possible to move all Store configuration to separate module,
    // and import it here
    StoreModule.forRoot({
        [AUTH_STORE_KEY]: authReducer
      },
      // todo: read about config
      {}
    ),
    // todo: ASK - is this a correct way to use ReduxDevTools? is it ReduxDevTools extensions should be used, or another one?
    StoreDevtoolsModule.instrument({
      name: 'Dashboard App',
      logOnly: environment.production
    }),

    HeaderModule,
    AuthPageModule,
    DashboardPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
