import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, trigger, state, animate, style } from '@angular/core';
import { JobApplyService } from './job-apply.service';
import { TextBoxComponent } from './components/textbox/textbox.component';
import { SingleSelectComponent } from './components/single-select/single-select.component';
import { FormContainerComponent } from './components/form-container-component/form-container-component';

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
  languageOptions: any[];

  @ViewChild('parentContentConainer', {read: ViewContainerRef}) parentContentConainer: ViewContainerRef;

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
    //For each step create different form containers with its form elements
    this.jsonTemplate.steps.forEach(item => {
      console.log(item);
      this.createStepWithFormElements(this.parentContentConainer, item);
    });
    //Create elements for formGroup1 and formGroup2
    let formGroup1Components = this.jsonTemplate.steps[0].component_groups[0].components;
    let formGroup2Components = this.jsonTemplate.steps[0].component_groups[1].components;
    this.fromGroup1Heading = this.jsonTemplate.steps[0].component_groups[0].group_label;
    this.fromGroup2Heading = this.jsonTemplate.steps[0].component_groups[1].group_label;

  }

 createStepWithFormElements(parentContainer, params) {
     //For each step there are different form groups so create forms with its form elements
     for(let i = 0; i < params.component_groups.length; i++) {
        //Use ComponentFactoryResolver to compile html view elements or other components
        let compFactory = this.cfResolver.resolveComponentFactory(FormContainerComponent);
        let formElement = parentContainer.createComponent(compFactory);
        formElement.instance.formGroup1Heading = params.component_groups[0].group_label;
        formElement.instance.formGroup1Components = params.component_groups[0].components;
        formElement.instance.formGroup2Heading = params.component_groups[1].group_label;
        formElement.instance.formGroup2Components = params.component_groups[1].components;
       // formElement.instance.containerID = "step" + i;
     }
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
