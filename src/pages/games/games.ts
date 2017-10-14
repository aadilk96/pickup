import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = []; 
    for(let i = 10; i >= 1; i--){
      this.items.push({
        text: "Game " + i, 
        id: i,
      });
    }

    this.search = [
      'Amsterdam',
      'Bogota'
    ];
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
      this.search = this.search.filter((search) => {
        return (search.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  loadMap() {
     let latLng = new google.maps.LatLng(-34.9290, 138.6010);
  
     let mapOptions = {
       center: latLng,
       zoom: 15,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }
  
     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
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
   }
}



