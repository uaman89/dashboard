import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarModule } from '../../features/sidebar/sidebar.module';


@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  exports: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    SidebarModule,
    DashboardRoutingModule
  ]
})
export class DashboardPageModule {
}
