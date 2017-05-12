import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, Output } from '@angular/core';
import { TextBoxComponent } from '../textbox/textbox.component';
import { SingleSelectComponent } from '../single-select/single-select.component';

@Component({
    selector: 'form-container',
    templateUrl: './form-container-component.html'
})

export class FormContainerComponent implements OnInit{
 
  @Input()
  formGroup1Components: any[];
  @Input()
  formGroup2Components: any[];
  @Input()
  formGroup1Heading: String = "";
  @Input()
  formGroup2Heading: String = "";
  @Input()
  containerID: String = "";

  @ViewChild('formGroup1', {read: ViewContainerRef}) formGroup1: ViewContainerRef;
  @ViewChild('formGroup2', {read: ViewContainerRef}) formGroup2: ViewContainerRef;
 
  constructor(
      private cfResolver: ComponentFactoryResolver
  ) {

    }

    ngOnInit() {
        // set an array of objects which is passed from the view
        this.formGroup1Components = this.formGroup1Components;
        this.formGroup2Components = this.formGroup2Components;
        this.formGroup1Heading = this.formGroup1Heading;
        this.formGroup2Heading = this.formGroup2Heading;
        this.containerID = this.containerID;
        console.log("stepid: ", this.containerID);
        for(let item = 0; item < this.formGroup1Components.length; item++) {
            let component = this.formGroup1Components[item];
        if(component.type === 'text') {
            this.createTextBoxComponent(this.formGroup1,component.label, component.placeholder, component.value);
        }else if(component.type === 'select') {
            this.createSingleSlelectComponent(this.formGroup1, component);
        }
        }

        for(let item = 0; item < this.formGroup2Components.length; item++) {
        let component = this.formGroup2Components[item];
        if(component.type === 'text') {
            this.createTextBoxComponent(this.formGroup2, component.label, component.placeholder, component.value);
        }else if(component.type === 'select') {
            this.createSingleSlelectComponent(this.formGroup2, component);
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

  createSingleSlelectComponent(parentContainer, params) {
    //Use ComponentFactoryResolver to compile html view elements or other components
    let compFactory = this.cfResolver.resolveComponentFactory(SingleSelectComponent);
  	let formElement = parentContainer.createComponent(compFactory);
    formElement.instance.msgLabel = params.label;
    formElement.instance.defaultText = params.default_text;
    formElement.instance.options = params.options;
  }
}