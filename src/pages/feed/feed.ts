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
  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          this.items.push( this.items.length );
        }

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }

  ionViewDidLoad() {
  }

}