import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
// import { AddComponent } from './modules/dashboard/components/add/add.component';
import { CommentsComponent } from './modules/dashboard/components/comments/comments.component';
import { AdminGuard } from 'src/app/services/admin.guard';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path : '',
    pathMatch:'full',
    redirectTo : 'LoginComponent'
  },
  {
    path: 'login',
    component: LoginComponent,
   
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    canActivate : [AdminGuard],
  },
  {
    path: 'comments/:id',
    component: CommentsComponent,
    canActivate : [AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
