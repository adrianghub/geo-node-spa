import { Routes } from '@angular/router';
import { AuthFormComponent } from './core/auth/pages/auth-form/auth-form.component';
import { AppGuard } from './core/guards/app.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
    ],
    canActivate: [AppGuard],
  },
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AuthFormComponent,
        loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'logout',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
