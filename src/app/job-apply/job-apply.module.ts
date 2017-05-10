import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplyComponent } from './job-apply.component';
import { JobApplyService }	from './job-apply.service';
import { TextBoxComponent } from './components/textbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JobApplyComponent, TextBoxComponent],
  providers: [JobApplyService],
  exports: [JobApplyComponent]
})
export class JobApplyModule { }
