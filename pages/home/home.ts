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
  
calculateAL() {
  this.bmi = this.weight / (this.height * this.height);
  this.bmi = parseFloat(this.bmi.toFixed(2));

  constructor(public navCtrl: NavController) {

  }

}
