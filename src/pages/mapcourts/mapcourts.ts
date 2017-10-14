import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ViewChild, ElementRef } from '@angular/core';
import { SearchCourtPage } from '../searchcourt/searchcourt';
import { CourtSelectionPage } from '../courtselection/courtselection';
import { CourtHierarchyPage } from '../courthierarchy/courthierarchy'
import { LoginPage } from '../login/login';

declare var google;

@IonicPage()
@Component({
  selector: 'page-mapcourts',
  templateUrl: 'mapcourts.html',
})
export class MapCourtsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  gmarkers = [];
  
  image_basketball = {
    url: "https://cdn.pixabay.com/photo/2014/04/03/09/59/basketball-309539_1280.png", // url
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(15, 15) // anchor
  };
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
      
           let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      
           let mapOptions = {
             center: latLng,
             zoom: 15,
             mapTypeId: google.maps.MapTypeId.ROADMAP
           }
      
           this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

           this.map.addListener('click', (event) => this.addMarker(event))
      
         }, (err) => {
           console.log(err);
         });
 
  }

  addCenterMarker(){
    var marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.map.getCenter(),
      icon: this.image_basketball
    });
    

    marker.addListener("dblclick", function() {
      marker.setMap(null);
    });
  
    let content = "<h4>Information!</h4>";         
  
    this.addInfoWindow(marker, content);
  }

  addMarker(event){
    
    var marker = new google.maps.Marker({
      position: event.latLng,
      draggable: true,
      animation: google.maps.Animation.BOUNCE,
      map: this.map,
      icon: this.image_basketball
    });

    marker.addListener("dblclick", () => {
      marker.setMap(null);
    });      
    marker.addListener("click", () => {
      this.goToCourt(event);
    });       

    this.addInfoWindow(marker, event);
   }

    goCourt(){
      this.navCtrl.push(SearchCourtPage)

    }

    goHierarchy(){
      this.navCtrl.push(CourtHierarchyPage)
    }

    goToCourt(event) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'latLng': event.latLng
        }, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              this.navCtrl.push(CourtSelectionPage, {address: results[0].formatted_address});
            }
          }
        });
        // this.navCtrl.push(SearchCourtPage, {'address': 'nimic'});
    }

    addInfoWindow(marker, event){
        google.maps.event.addListener(marker, 'click', () => {
          var content="Play here!";
          var infoWindow = new google.maps.InfoWindow();  
          infoWindow.setContent(content);
          infoWindow.open(this.map, marker);
        })
    }

}
