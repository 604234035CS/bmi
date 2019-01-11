import { BmiProvider } from './../../providers/bmi/bmi';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  height:number;
  weight:number;
  bmiValue:number;

  constructor(private bmiReast:BmiProvider, public navCtrl: NavController) {

  }

  calculateBMI() {
    console.log(this.height);
    console.log(this.weight);
    this.bmiValue=this.bmiReast.bmiCalculate(this.height,this.weight);
  }

}
