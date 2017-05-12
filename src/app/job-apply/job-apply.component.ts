import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, trigger, state, animate, style } from '@angular/core';
import { JobApplyService } from './job-apply.service';
import { TextBoxComponent } from './components/textbox.component';


@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css'],
  animations: [
  trigger('visibilityChanged', [
    state('shown' , style({ opacity: 1 })), 
    state('hidden', style({ opacity: 0 }))
  ])
]
})

export class JobApplyComponent implements OnInit {
  jsonTemplate: any;
  fromGroup1Heading: String = "";
  fromGroup2Heading: String = "";
  totalSteps: Array<String> = ['step1', 'step2', 'step3']; 

  @ViewChild('formGroup1', {read: ViewContainerRef}) formGroup1: ViewContainerRef;
  @ViewChild('formGroup2', {read: ViewContainerRef}) formGroup2: ViewContainerRef;
  @ViewChild('step1') step1Container;
  @ViewChild('step2') step2Container;
  @ViewChild('step3') step3Container;

  constructor(
  	          private jobService: JobApplyService,
  	          private cfResolver: ComponentFactoryResolver
  ) { 

  	console.log("JSON template: ",jobService.getJSONTemplate());
  	this.jsonTemplate = jobService.getJSONTemplate();
  }

  ngOnInit() {
   
    //Create elements for formGroup1 and formGroup2
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

  //Save and go to next page
  goToNextStep(step) {
    console.log("clicked on: ", step, 'step1 container: ', this.step1Container.nativeElement.classList);
    if(typeof(step) !== 'undefined' && step !== null && step === 'step1') {
      this.step1Container.nativeElement.classList.add('is-current');
      this.step2Container.nativeElement.classList.remove('is-current');
      this.step3Container.nativeElement.classList.remove('is-current');
    }else if(typeof(step) !== 'undefined' && step !== null && step === 'step2') {
      this.step1Container.nativeElement.classList.remove('is-current');
      this.step2Container.nativeElement.classList.add('is-current');
      this.step3Container.nativeElement.classList.remove('is-current');
    }if(typeof(step) !== 'undefined' && step !== null && step === 'step3') {
      this.step1Container.nativeElement.classList.remove('is-current');
      this.step2Container.nativeElement.classList.remove('is-current');
      this.step3Container.nativeElement.classList.add('is-current');
    }
  }
}
