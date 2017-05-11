import { Component, OnInit, ElementRef, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { JobApplyService } from './job-apply.service';
import { TextBoxComponent } from './components/textbox.component';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})

export class JobApplyComponent implements OnInit {
  fname: String = "Your name pls";
  jsonTemplate: any;
  formElements: Array<Number>;
  formViewElements: any;

  @ViewChild('formGroup1', {read: ViewContainerRef}) formGroup1: ViewContainerRef;


  constructor(
  	private jobService: JobApplyService,
  	private elemRef: ElementRef,
  	private cfResolver: ComponentFactoryResolver
  ) { 

  	console.log("JSON template: ",jobService.getJSONTemplate());
  	console.log("HTML ElementRef: ", this.elemRef, this.elemRef.nativeElement.querySelector('.brand'));
  	this.jsonTemplate = jobService.getJSONTemplate();
  	this.formElements = [1,2,3,4];
  	
  }

  ngOnInit() {
    this.createTextBoxComponent(this.formGroup1,"This is dynamic text", "This is awesome", "nothing");
  }

  createTextBoxComponent(parentContainer, label, placeholder, value) {
    let compFactory = this.cfResolver.resolveComponentFactory(TextBoxComponent);
  	let formElement = parentContainer.createComponent(compFactory);
    formElement.instance.label = label;
    formElement.instance.placeholder = placeholder;
    formElement.value = value;
  }
}
