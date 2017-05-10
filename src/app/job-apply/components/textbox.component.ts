import { Component, Input } from '@angular/core';

@Component({
	selector: 'textbox',
	styleUrls: ['./textbox.component.css'],
	templateUrl: './textbox.component.html'

})

export class TextBoxComponent {
	label: String = "Full Namee";

	@Input()
	tlabel: String;

	placeholder: String = " Your Name";
	constructor() {}
}