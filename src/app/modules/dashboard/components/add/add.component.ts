import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  postForm: FormGroup;
  isEdit: boolean = false;

  @ViewChild('closeAddExpenseModal', {static: true}) closeAddExpenseModal: ElementRef;

  constructor(private service: DashboardService, private route: ActivatedRoute, private router: Router, private dialogRef: MatDialogRef<DashboardComponent>, @Inject(MAT_DIALOG_DATA) private data: any, private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
      id: ['']
    })
    console.log('dk', this.data);
    if(this.data.type == 'Edit'){
      this.isEdit = true;
      this.postForm.patchValue({
        title: this.data.title,
        body: this.data.body,
        userId: this.data.userId,
        id: this.data.id
      })
    }
  }


  createPost() {
    console.log('data to send ', this.postForm.value);

    if(!this.postForm.valid){
      console.log('invalid');
      this.commonService.validateFields(this.postForm);
      return;
    }

    const data = {
      userId: this.postForm.value.userId,
      title: this.postForm.value.title,
      body: this.postForm.value.body,
      id: this.postForm.value.id || undefined
    }

    if(this.isEdit){
      this.service.updatePost(data).subscribe(res => {
        console.log('success', res);
        this.commonService.showSnackBar('Success');
        this.dialogRef.close('success');
      }, error => {
        console.log('error', error);
        this.commonService.showSnackBar('Some error occured', 'error');
      })
    }
    else{
      this.service.createPost(data).subscribe(res => {
        console.log('success', res);
        this.commonService.showSnackBar('Success');
        this.dialogRef.close('success');
      }, error => {
        this.commonService.showSnackBar('Some error occured', 'error');
        console.log('error', error);
      })
    }
    
    
    // this.closeAddExpenseModal.nativeElement.click();
    // this.dialogRef.close();
    // this.service.createPost(this.data).subscribe(res => {
    //   console.log('create', res);
    // })
  }

}
