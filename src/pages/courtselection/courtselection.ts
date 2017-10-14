import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AchievementsPage } from '../achievements/achievements'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CourtselectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courtselection',
  templateUrl: 'courtselection.html',
})
export class CourtSelectionPage {
  rootPage: any = AchievementsPage;
  address = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.address = navParams.get('address');
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

  goHome(){
    this.navCtrl.setRoot(AchievementsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourtSelectionPage');
  }

}
