import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  items = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (var i = 0; i < 30; i++){
      this.items.push( this.items.length );
    }
  }

  doInfinite(infiniteScroll): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          this.items.push( this.items.length );
        }
        infiniteScroll.complete();
      }, 500);
    });
  }

  ionViewDidLoad() {
  }
}