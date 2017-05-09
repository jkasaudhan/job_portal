import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplyComponent } from './job-apply.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JobApplyComponent],
  exports: [JobApplyComponent]
})
export class JobApplyModule { }
