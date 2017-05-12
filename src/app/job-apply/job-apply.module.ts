import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplyComponent } from './job-apply.component';
import { JobApplyService }	from './job-apply.service';
import { TextBoxComponent } from './components/textbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [JobApplyComponent, TextBoxComponent],
  providers: [JobApplyService],
  entryComponents: [ TextBoxComponent ],
  exports: [JobApplyComponent]
})
export class JobApplyModule { }
