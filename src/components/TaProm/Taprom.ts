import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google:any;

@Component({
  selector: 'Taprom',
  templateUrl: 'Taprom.html'
})

export class TapromPage {

  @ViewChild('map') mapRef:ElementRef;
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
  }

  ionViewDidLoad(){
    this.DisplayMap();
  }

  DisplayMap(){

    const location =  new google.maps.LatLng(13.4348,103.8893);

    const options = {
      center:location,
      zoom:10,
      streetViewControl:false,
      mapTypeId:'hybrid'
    };

    const map = new google.maps.Map(this.mapRef.nativeElement,options);

    this.addMarker(location,map);
  }

  addMarker(position,map){
    return new google.maps.Marker({
      position,map
    })
  }

}
