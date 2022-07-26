import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';
import { TabComponent } from './components/tab/tab.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [TabsContainerComponent, TabComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TabsContainerComponent, TabComponent, InputComponent],
})
export class SharedModule {}
