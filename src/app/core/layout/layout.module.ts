import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [NavComponent, LayoutComponent],
  imports: [RouterModule, CommonModule],
  exports: [NavComponent],
})
export class LayoutModule {}
