import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  height: number;
  weight: number;
  bmi: number;
  bmiMessage: string;
calculateBMI() {
  this.bmi = this.weight / (this.height * this.height);
  this.bmi = parseFloat(this.bmi.toFixed(2));
  
  constructor(public navCtrl: NavController) {

  }

}
