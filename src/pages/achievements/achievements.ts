import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockDataProvider } from '../../providers/mock-data/mock-data';

@IonicPage()
@Component({
  selector: 'page-achievements',
  templateUrl: 'achievements.html',
})
export class AchievementsPage {

  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mdp: MockDataProvider) {
    this.items = mdp.getItems();
  }

  ionViewDidLoad() {
    
  }

  expand(item) {
    item.expanded = !(item.expanded);
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] != item) {
        this.items[i].expanded = false;
      }
    }
  }
}
