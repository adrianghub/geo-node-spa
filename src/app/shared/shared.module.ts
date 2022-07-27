import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';
import { TabComponent } from './components/tab/tab.component';
import { InputComponent } from './components/input/input.component';
import { AlertSnackbarComponent } from './components/alert-snackbar/alert-snackbar.component';

@NgModule({
  declarations: [TabsContainerComponent, TabComponent, InputComponent, AlertSnackbarComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TabsContainerComponent, TabComponent, InputComponent, AlertSnackbarComponent],
})
export class SharedModule {}
