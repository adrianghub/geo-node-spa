import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';
import { httpInterceptorProviders } from '@app/core/interceptors/http.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [SharedModule, ReactiveFormsModule, HttpClientModule],
  providers: [httpInterceptorProviders],
  exports: [AuthFormComponent],
})
export class AuthModule {}
