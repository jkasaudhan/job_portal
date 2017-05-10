import { Component, OnInit, ElementRef } from '@angular/core';
import { JobApplyService } from './job-apply.service';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})

export class JobApplyComponent implements OnInit {
  fname: String = "Your name pls";
  jsonTemplate: any;
  formElements: Array<Number>;

  constructor(
  	private jobService: JobApplyService,
  	private elemRef: ElementRef
  ) { 

  	console.log("JSON template: ",jobService.getJSONTemplate());
  	console.log("HTML ElementRef: ", this.elemRef, this.elemRef.nativeElement.querySelector('.brand'));
  	this.jsonTemplate = jobService.getJSONTemplate();
  	//this.elemRef.nativeElement.querySelector('.form-content').innerHTML = 'hello sarkar';
  	this.formElements = [1,2,3,4];
  }

  ngOnInit() {
  }

}
