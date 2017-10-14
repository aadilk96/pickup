import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapCourtsPage } from '../mapcourts/mapcourts'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-courtselection',
  templateUrl: 'courtselection.html',
})
export class CourtSelectionPage {
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
    this.navCtrl.setRoot(MapCourtsPage);
  }

  ionViewDidLoad() {
  }

}
