import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AchievementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-achievements',
  templateUrl: 'achievements.html',
})
export class AchievementsPage {
  items:any[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = []; 
    for(let i = 1; i <=10; i++){
      this.items.push({
        text: "Item " + i, 
        id: i 
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievementsPage');
  }

}
