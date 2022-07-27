import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
@NgModule({
  declarations: [NavComponent, LayoutComponent],
  imports: [RouterModule, CommonModule, SharedModule],
  exports: [NavComponent],
})
export class LayoutModule {}
