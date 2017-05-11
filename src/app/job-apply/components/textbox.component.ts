import { Component, Input, Output, EventEmitter } from '@angular/core';

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

	@Output()
	change: EventEmitter<any> = new EventEmitter<any>();

	constructor() {}

	onChange(e) {
		this.change.emit(e);
	}
}