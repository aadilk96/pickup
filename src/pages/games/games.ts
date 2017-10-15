import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { JoinPage } from '../join/join'

declare var google;

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  @ViewChild('map') mapElement: ElementRef;

  items: any[]; 
  map: any;
  search: any[]; 
  game = "Map";
  image_basketball = {
    url: "https://cdn.pixabay.com/photo/2014/04/03/09/59/basketball-309539_1280.png", // url
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(15, 15) // anchor
  };
  allitems = ["Cancha de Basquet Carmen", "Cancha de Basquet Oscar", "Cancha de Basquet", "Cancha de Basquet Menorca","Barceloneta"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad(): void {
    setTimeout(()=>{
      this.loadMap();
    }, 100);
  }

  onSegementChanged($event){
    if ($event == 'map') {
      this.loadMap();
    }
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.allitems.filter((search) => {
        return (search.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  goToJoin(lat, lon) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'latLng': new google.maps.LatLng(lat, lon)
    }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          this.navCtrl.push(JoinPage, {address: results[0].formatted_address});
        }
      }
    });
  }

  goToJoinNoLatLon() {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'latLng': new google.maps.LatLng(41.383159, 2.191586)
    }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          this.navCtrl.push(JoinPage, {address: results[0].formatted_address});
        }
      }
    });
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
      this.addMarkerLatLon(position.coords.latitude, position.coords.longitude);
    });
  }

   addInfoWindow(marker, event){
    google.maps.event.addListener(marker, 'click', () => {
      var content="Play here!";
      var infoWindow = new google.maps.InfoWindow();  
      infoWindow.setContent(content);
      infoWindow.open(this.map, marker);
    })
}

   addMarkerLatLon(lat, lon){
      var latlon = new google.maps.LatLng(lat, lon);

      var marker = new google.maps.Marker({
        position: latlon,
        draggable: true,
        animation: google.maps.Animation.BOUNCE,
        map: this.map,
        icon: this.image_basketball
      });  
      
      marker.addListener('click', () => {
        this.goToJoin(lat, lon);
      })
   }
}



