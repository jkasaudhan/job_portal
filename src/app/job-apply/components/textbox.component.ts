import { Component, Input } from '@angular/core';

@Component({
	selector: 'textbox',
	styleUrls: ['./textbox.component.css'],
	templateUrl: './textbox.component.html'

})

export class TextBoxComponent {

	@Input()
	label: String = "";
	placeholder: String = "";
	value: String = "";
	
	constructor() {}
}