import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page.component';
import { UsersPageModule } from './users-page/users-page.module';
import { UsersPageComponent } from './users-page/users-page.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TasksPageModule } from './tasks-page/tasks-page.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      { path: 'tasks', component: TasksPageComponent },
      { path: 'users', component: UsersPageComponent },
      { path: '**', redirectTo: 'tasks' }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UsersPageModule,
    TasksPageModule
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
