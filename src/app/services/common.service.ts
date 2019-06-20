import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loginData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private snackBar: MatSnackBar) { }

  handleError(error) {
    this.showSnackBar(error.message, 'error');
  }

  showSnackBar(message: any, type?: 'error'|'success'){
    console.log('got message ', message);
    let className = (type == 'error' ? 'snackbar-error' : 'snackbar-success');
    this.snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
       panelClass: [className]

    })
  }

  validateFields(form: FormGroup) {
    let data = Object.keys(form.controls);

    data.map((field) => {

      const ele = form.get(field);
      if (ele instanceof FormArray) {
        (<FormArray>ele).controls.forEach((element: FormGroup) => {
          this.validateFields(element);
        });
      }
      else if (ele instanceof FormControl) {
        ele.markAsTouched({ onlySelf: true });
        ele.markAsDirty({ onlySelf: true });
      } else if (ele instanceof FormGroup) {
        this.validateFields(ele);
      }
    });

  }
}
