import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { DashboardPageModule } from './pages/dashboard/dashboard-page.module';
import { AuthPageModule } from './pages/auth/auth-page.module';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './enttities/auth/store/auth.reducer';

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
    // todo: is it possible to move all Store configuration to separate module,
    // and import it here
    StoreModule.forRoot({
        auth: authReducer
      },
      // todo: read about config
      {}
    ),

    HeaderModule,
    AuthPageModule,
    DashboardPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
