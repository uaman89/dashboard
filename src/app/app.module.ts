import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { AuthPageComponent } from './pages/auth/auth.page.component';
import { DashboardPageModule } from './pages/dashboard/dashboard-page.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    DashboardPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
