import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { MockDataProvider } from '../../providers/mock-data/mock-data';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  slides = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private mdp: MockDataProvider) {
    this.slides = mdp.getSlides();
  }

  ionViewDidLoad() {
    this.auth.onAuthChanged(user => {
      if (user != null) {
        this.navCtrl.setRoot(TabsPage);
      }
    })
  }

  gotologin() {
    this.navCtrl.push(LoginPage);
  }

  gotosignup() {
    this.navCtrl.push(SignupPage);
  }
}
