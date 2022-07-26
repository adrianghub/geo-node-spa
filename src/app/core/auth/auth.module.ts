import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [SharedModule, ReactiveFormsModule],
  exports: [AuthFormComponent],
})
export class AuthModule {}
