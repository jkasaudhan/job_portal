import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'single-select',
    template: `
    		<div class="form-group">
		            	 <label for="salutation">{{msgLabel}}<span class="req"> *</span> </label>
						<div class="dropdown">
						  <button class="btn btn-default  dropdown-toggle" type="button" data-toggle="dropdown">{{defaultText}}
						  <span class="caret"></span></button>
						  <ul class="dropdown-menu">
						    <li *ngFor="let item of options">
                                <a  href="#">{{item.label}}</a>
                            </li>
						    
						  </ul>
						</div>
		    </div>
    `
})

export class SingleSelectComponent implements OnInit{
   
    @Input()
    msgLabel: String = "Preferred Language";

    @Input()
    defaultText: String = "Lanugage";

    @Input()
    options: any[];

    consructor() {

    }

    ngOnInit() {
        //Inorder to set the values passed from the comonent slector element we have to set it the current option variable
        this.options = this.options;
    }

}