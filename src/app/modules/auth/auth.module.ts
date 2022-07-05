import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AuthFormComponent
  ]
})
export class AuthModule { }
