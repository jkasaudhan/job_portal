import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
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
  fromGroup1Heading: String = "";
  fromGroup2Heading: String = "";

  @ViewChild('formGroup1', {read: ViewContainerRef}) formGroup1: ViewContainerRef;
  @ViewChild('formGroup2', {read: ViewContainerRef}) formGroup2: ViewContainerRef;

  constructor(
  	          private jobService: JobApplyService,
  	          private cfResolver: ComponentFactoryResolver
  ) { 

  	console.log("JSON template: ",jobService.getJSONTemplate());
  	this.jsonTemplate = jobService.getJSONTemplate();
  }

  ngOnInit() {
   
    //create elements for formGroup1 and formGroup2
    let formGroup1Components = this.jsonTemplate.steps[0].component_groups[0].components;
    let formGroup2Components = this.jsonTemplate.steps[0].component_groups[1].components;
    this.fromGroup1Heading = this.jsonTemplate.steps[0].component_groups[0].group_label;
    this.fromGroup2Heading = this.jsonTemplate.steps[0].component_groups[1].group_label;

    for(let item = 0; item < formGroup1Components.length; item++) {
        let component = formGroup1Components[item];
      if(component.type === 'text') {
        this.createTextBoxComponent(this.formGroup1,component.label, component.placeholder, component.value);
      }
      
    }

    for(let item = 0; item < formGroup2Components.length; item++) {
      let component = formGroup2Components[item];
       if(component.type === 'text') {
        this.createTextBoxComponent(this.formGroup2, component.label, component.placeholder, component.value);
       }
    }
  }

  createTextBoxComponent(parentContainer, label, placeholder, value) {
    //Use ComponentFactoryResolver to compile html view elements or other components
    let compFactory = this.cfResolver.resolveComponentFactory(TextBoxComponent);
  	let formElement = parentContainer.createComponent(compFactory);
    formElement.instance.label = label;
    formElement.instance.placeholder = placeholder;
    formElement.instance.value = value;
  }
}
