import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthFormComponent } from './modules/auth/components/auth-form/auth-form.component';
import { DashboardComponent } from './modules/user/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full'  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
