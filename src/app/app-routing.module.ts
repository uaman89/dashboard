import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './pages/auth/auth-page.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'auth', component: AuthPageComponent },
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard-page.module').then(m => m.DashboardPageModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
