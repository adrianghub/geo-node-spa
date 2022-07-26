import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ROUTES } from '@app/app.routes';
import { AppComponent } from '@app/app.component';
import { SharedModule } from '@app/shared/shared.module';
import { AuthModule } from '@app/core/auth/auth.module';
import { LayoutModule } from '@app/core/layout/layout.module';
import { DashboardModule } from '@app/modules/dashboard/dashboard.module';
import { AppGuard } from '@app/core/guards/app.guard';
import { AuthGuard } from '@app/core/guards/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule, SharedModule, DashboardModule, LayoutModule],
  providers: [AppGuard, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
