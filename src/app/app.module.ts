import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthModule } from './core/auth/auth.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './core/layout/layout.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule, SharedModule, DashboardModule, LayoutModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
