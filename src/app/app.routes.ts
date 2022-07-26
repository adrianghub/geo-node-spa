import { Routes } from '@angular/router';
import { AuthFormComponent } from './core/auth/pages/auth-form/auth-form.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  { path: 'auth', component: AuthFormComponent },
];
