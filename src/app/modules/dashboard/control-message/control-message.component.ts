import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-message',
  template: `<div *ngIf="errorMessage" class="error">{{errorMessage}}</div>`,
    styles: [`
        .error{
            color:red;    
            font-size: 14px;
        }
    `]
})
export class ControlMessageComponent {

  constructor() { }

  @Input() control: FormControl;

    config(key, validatorValue) {
        let _config = {
            'required': 'This field is required.'
        }
        return _config[key];
    }

    get errorMessage() {
        if (this.control.dirty && this.control.touched) {
            for (let propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName)) {
                    return this.control.errors.label || this.config(propertyName, this.control.errors);
                }
            }
        }
        return "";
    }

}
