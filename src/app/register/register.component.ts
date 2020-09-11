import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor( private httpService: HttpService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  }
  buildRegisterForm(): void {
    this.registrationForm = this.fb.group({
      userName: '',
      number: '',
      password: '',
    })
  }
  onRegisterClick(): void {
    if (this.registrationForm.valid) {
     this.register();
      alert('Register successful')
    } else {
      alert('Please enter username/password in correct format')
    }
  }
  register() {
    this.httpService.register();
 }

}
