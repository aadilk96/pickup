import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CourtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchcourt',
  templateUrl: 'searchcourt.html',
})
export class SearchCourtPage {
  court_address = ''
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.court_address = navParams.get("address");
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourtPage');
  }

  initializeItems() {
    // TODO replace with real data from the database
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

  goToCourtSelection(courtName){
      this.navCtrl.push(SearchCourtPage, {"location_name": courtName});
  }

  getItems(event: any) {
    this.initializeItems();

    // set val to the value of the searchbar
    let val = event.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
