import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private httpService: HttpService, 
    private fb: FormBuilder 
  ) { }

  ngOnInit(): void {
    this.buildLoginForm(); 
  }
  buildLoginForm(): void {
    this.loginForm = this.fb.group({
      recnumber: ['', Validators.minLength(10),Validators.pattern(/^[6-9]\d{9}$/)],
      password: ['', Validators.required]
    })
  }
  onLoginClick(): void {  
    if (this.loginForm.valid) {
      this.login();
      alert('Login successful')
    } else {
      alert('Please enter username/password')
    }
  }
  login() {
    if(this.httpService.login(this.loginForm.value))
      {
        alert('login successfull...')
        this.router.navigate(['/recharge'])
      }
      else{
        alert('no service')
      }
    
    
  }

}
