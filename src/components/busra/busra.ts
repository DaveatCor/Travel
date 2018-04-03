import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google:any;

@Component({
  selector: 'busra',
  templateUrl: 'busra.html'
})
export class BusraComponent {

  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController, public navPrarams: NavParams) {
  }

  ionViewDidLoad(){
    this.DisplayMap();
  }

  DisplayMap() {

    const location = new google.maps.LatLng(12.566545,107.418987);

    const options = {
      center:location,
      zoom:12,
      streetViewControl:false,
      mapTypeId:'hybrid'
    };
    
    const map = new google.maps.Map(this.mapRef.nativeElement,options);

    this.addMarker(location,map);

  }

  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
  }

}
