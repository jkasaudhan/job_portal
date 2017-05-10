import { Injectable } from '@angular/core';

@Injectable()
export class JobApplyService {

  constructor() {
  	console.log("calling service");
  }

  getJSONTemplate() {

  	let viewElements = [
					  	{
					  		"type": "text",
					  		"value": "",
					  		"validators": ["required", "email"],
					  		"label": "Please provide your email address",
					  		"placeholder": "Your email"

					  	},
					  	{
					  		"type": "text",
					  		"value": "",
					  		"validators": ["required"],
					  		"label": "Your First Name",
					  		"placeholder": "First Name"

					  	},
					  	{
					  		"type": "text",
					  		"value": "",
					  		"validators": ["required"],
					  		"label": "Your Last Name",
					  		"placeholder": "Last Name"

					  	},
					  	{
					  		"type": "select",
					  		"default_text": "Please Select",
					  		"label": "Pleasse select your language",
					  		"options": [{
					  					"value": "de",
					  					"label": "Deutsch."
					  					},
					  					{
					  					"value": "en",
					  					"label": "English"
					  					},
					  					{
					  					"value": "np",
					  					"label": "Nepali"
					  					}]	

					  	}];

  	let steps = [
		  		{
		  			"identifier": "step1",
		  			"label": "General Information",
		  			"components": viewElements
		  		},
		  		{
		  			"identifier": "step2",
		  			"label": "General Information",
		  			"components": viewElements
		  		},
		  		{
		  			"identifier": "step3",
		  			"label": "General Information",
		  			"components": viewElements
		  		}];


	// Main json template which is used to render views
  	let jobApplyJsonTemplate = {
  		"template_name": "job_apply",
  		"steps": steps
  	};

  	return jobApplyJsonTemplate;
  }

}
