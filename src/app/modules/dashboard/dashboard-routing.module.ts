import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { AuthGuard } from '../../core/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
