import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  rechargeForm: FormGroup; 
  balance:number = 1000;

  constructor(private router: Router,
  private httpService: HttpService,
  private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildRechargeForm();
  }
  buildRechargeForm(): void {
    this.rechargeForm = this.fb.group({
      number: '',
      amount: '',
       })
  }
  onRechargeClick(): void {
    if (this.rechargeForm.valid) {
     this.recharge();
      alert('Recharge successful')
    } else {
      alert('Please enter correct number')
    }
  }
  recharge() {
    if(this.rechargeForm.value.number=='9123416411' && this.rechargeForm.value.amount < this.balance){
      alert('Recharge Successfull')
      this.router.navigate(['/login'])
    }
    else{
      alert('Enter amount of less than Balance')
    }
    
 }


}
