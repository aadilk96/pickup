import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  items: any[]; 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = []; 
    for(let i = 10; i >= 1; i--){
      this.items.push({
        text: "Game " + i, 
        id: i,
      });
  }
  this.initializeItems();
}
initializeItems() {
  this.search = [
    'Amsterdam',
    'Bogota',
  ];
}
ionViewDidLoad(){
  this.loadMap();
}
getItems(ev: any) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.search = this.search.filter((search) => {
      return (search.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}
loadMap(){
  
     let latLng = new google.maps.LatLng(-34.9290, 138.6010);
  
     let mapOptions = {
       center: latLng,
       zoom: 15,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }
  
     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
   } function(err){
    console.log(err);
  };
  addMarker(){
    
     let marker = new google.maps.Marker({
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: this.map.getCenter()
     });
    
     let content = "<h4>Information!</h4>";         
    
     this.addInfoWindow(marker, content);
    
   }
   addInfoWindow(marker, content){
    
     let infoWindow = new google.maps.InfoWindow({
       content: content
     });
    
     google.maps.event.addListener(marker, 'click', () => {
       infoWindow.open(this.map, marker);
     });
    
   } 
 }



