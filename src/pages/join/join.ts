import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourtHierarchyPage } from '../courthierarchy/courthierarchy'
import { MapCourtsPage } from '../mapcourts/mapcourts'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class JoinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage');
  }

  goHierarchy(){
    this.navCtrl.push(CourtHierarchyPage)
    
  }

  goHome(){
    this.navCtrl.setRoot(MapCourtsPage);
  }

  confirmGame() {
    const alert = this.alertCtrl.create({
      title: 'Confirm game',
      message: 'Are you sure you want to create the game??',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: () => {
            console.log('Game created');
            this.goHome();
          }
        }
      ]
    });
    alert.present();
  }

}
