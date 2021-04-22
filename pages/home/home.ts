import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  AL: number;
  vehicleprice: number;
  loanterm: number;
  loanamount: number;
  downpayment: number;
  downpaymentamount: number;
  totalinterest: number;
  monthlyamortization: number; 
  
  constructor(public navCtrl: NavController)  {}

  calculateAL() {
  this.downpaymentamount = this.vehicleprice * this.downpayment/100
  this.downpaymentamount = parseFloat(this.downpaymentamount.toFixed(2));
}
}
