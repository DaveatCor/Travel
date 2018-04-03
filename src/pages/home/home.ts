import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TapromPage } from '../../components/Taprom/Taprom';
import { AngkorComponent } from '../../components/Angkor/Angkor';
import { MondulkiriComponent } from '../../components/mondulkiri/mondulkiri';
import { BusraComponent } from '../../components/busra/busra';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
 
export class HomePage {

  constructor(public navCtrl: NavController) { 

  }

  showAngkor(){
    this.navCtrl.push(AngkorComponent);
  }

  showangkorsoltistic(){
    this.navCtrl.push(TapromPage);
  }

  showLove() {
    this.navCtrl.push(MondulkiriComponent);
  }

  showBusra() {
    this.navCtrl.push(BusraComponent);
  }

}
