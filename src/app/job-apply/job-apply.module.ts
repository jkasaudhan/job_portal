import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplyComponent } from './job-apply.component';
import { JobApplyService }	from './job-apply.service';
import { TextBoxComponent } from './components/textbox/textbox.component';
import { SingleSelectComponent } from './components/single-select/single-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormContainerComponent } from './components/form-container-component/form-container-component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [JobApplyComponent, 
                 TextBoxComponent,
                 SingleSelectComponent,
                 FormContainerComponent],
  providers: [JobApplyService],
  entryComponents: [ TextBoxComponent,
                     SingleSelectComponent,
                     FormContainerComponent ],
  exports: [JobApplyComponent]
})
export class JobApplyModule { }
