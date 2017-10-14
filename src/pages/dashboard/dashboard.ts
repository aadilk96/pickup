import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {  
  }

  ionViewDidLoad() {
  }

  logout() {
    this.navCtrl.setRoot(WelcomePage);
    this.auth.logout();
  }
}
