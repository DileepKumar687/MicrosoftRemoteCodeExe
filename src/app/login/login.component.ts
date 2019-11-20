import { Component,OnInit, Injectable, Input } from '@angular/core';
  import { FormGroup,FormControl, Validators }from '@angular/forms';
  import { Router }from '@angular/router';
  import { AuthService }from '../auth/auth.service';
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  @Injectable()
  export class LoginComponent  {
     @Input() isloggedin1 : Boolean=false;
    constructor(
  private route: Router,
  private authservice : AuthService) { }
  
   
    form= new FormGroup({
      username : new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
   });
   
  
    login(){
   let validuser= this.authservice.login(this.form.value.username,this.form.value.password)
   if (validuser) {
    this.isloggedin1=true;
    this.route.navigate(['homepage']);
   } else {
     this.form.setErrors({
       isivalidLogin:true
     });
   }   
   
      
  this.form.setErrors({invalidLogin:true})
  }
  
    }