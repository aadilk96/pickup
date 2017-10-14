import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public password: string;
  public email: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private auth: AuthProvider) {
  }
  
  login() {
    this.auth.onAuthChanged(user => {
      if (user != null) {
        this.success();
      }
    })
    var err = this.auth.signInEmail(this.email, this.password, err => {
      this.alertCtrl.create({title: err, buttons: ['OK']}).present();
    });
  }
  
  success() {
    this.navCtrl.setRoot(TabsPage);
  }
} 