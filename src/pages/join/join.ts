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

  details = {
    date: '2017-10-17',
    start_time: '18:30',
    finish_time: '20:30',
    players: '4'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.details.date = '2017-10-17';
    this.details.start_time = '18:30';
    this.details.finish_time = '20:30';
    this.details.players=  '4';
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
      title: 'Confirm join',
      message: 'Are you sure you want to join the game??',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Join',
          handler: () => {
            console.log('Game joined');
            this.goHome();
          }
        }
      ]
    });
    alert.present();
  }

}
