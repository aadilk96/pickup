import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { DatabaseProvider } from '../../providers/database/database';
import { WelcomePage } from '../welcome/welcome';

export class User {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  birthday: string;
  joindate: string;
  uid: string;
}

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  User = "Account";

  user: User = {
    firstName: 'adolf',
    lastName: 'hitler',
    displayName: 'nazi001',
    email: 'nazi@germany.de',
    birthday: '01/01/1909',
    joindate: '10/10/2017',
    uid: 'wfwf3849f3h'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private db: DatabaseProvider) {  
  }

  ionViewDidLoad() {
  }

  logout() {
    this.navCtrl.setRoot(WelcomePage);
    this.auth.logout();
  }
}
