import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required)
  });


  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  
  // onSubmit(){
  //   this.router.navigateByUrl('home');
  // }
  loginProc(email:any,password:any){
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }
  onSubmit() {
    let val = this.loginForm.value;

    //we can add json from Java backend in service
    if (val.email == "admin@gmail.com" && val.password == "admin") {
      console.log("User is logged in");
      this.router.navigateByUrl('home');
    }
    else {
      alert("Błędne dane");
    }
  }
  get f(){
    return this.loginForm.controls;
  }
   
  submit(){
    console.log(this.loginForm.value);
  }
  
}
