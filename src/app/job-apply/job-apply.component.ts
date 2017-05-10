import { Component, OnInit } from '@angular/core';
import { JobApplyService } from './job-apply.service';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})

export class JobApplyComponent implements OnInit {
  fname: String = "Your name pls";
  jsonTemplate: any;

  constructor(private jobService: JobApplyService) { 
  	console.log(jobService.getJSONTemplate());
  	this.jsonTemplate = jobService.getJSONTemplate();

  	
  }

  ngOnInit() {
  }

}
