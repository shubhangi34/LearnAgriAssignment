import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder, private router : Router) { }

  ngOnInit() {
    //email and password check
    if ((localStorage.getItem('email') == 'abc@gmail.com') && (localStorage.getItem('password') == '123456'))

    {
    
    this.router.navigate(['/dashboard']);
   }
    
  }

  /**
   * loginform fields
   */
LoginForm = this.fb.group({
  email : ['', Validators.required],
  password : ['', Validators.required]
})

//setting email and passwrd value in localstorage
login(data){
  console.log(data);
  localStorage.setItem('email', this.LoginForm.value.email);
  localStorage.setItem('password',this.LoginForm.value.password);
  this.router.navigate(['/dashboard']);
}
}
