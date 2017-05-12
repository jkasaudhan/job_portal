import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'textbox',
	template: `<div class="form-group">
				<label for="{{label}}"> {{label}} </label>
						<input required 
							type="text"
							name="{{label}}"
							value={{value}} 
							class="form-control"
							placeholder="{{placeholder}}"
							(keydown)="onChange($event)"/> 
				</div>`

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