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
import { AppStoreModule } from './app-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AppStoreModule,
    HeaderModule,
    AuthPageModule,
    AuthModule.forRoot(environment.auth),
    DashboardPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
