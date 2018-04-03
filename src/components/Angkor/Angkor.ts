import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google:any;

@Component({
  selector: 'Angkor',
  templateUrl: 'Angkor.html'
})
export class AngkorComponent {

  @ViewChild('map') mapRef:ElementRef;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.DisplayMap();
  }

  DisplayMap() {

    const location = new google.maps.LatLng(13.4125,
      103.8670);

    const options = {
      center:location,
      zoom:10,
      streetViewControl:false,
      mapTypeId:'hybrid'
    };

    const map = new google.maps.Map(this.mapRef.nativeElement,options);

    this.addMarker(location,map);
  }

  addMarker(position,map) {
    return new google.maps.Marker({
      position,
      map
    });
  }

}
