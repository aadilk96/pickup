import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { DatabaseProvider } from '../../providers/database/database';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private db: DatabaseProvider) {  
  }

  ionViewDidLoad() {
  }

  logout() {
    this.db.createEvent({hello: 'test', uid: 'xyz'});
    this.db.deleteEvent("-KwNvao8qUy7ts1dUtB3");
    this.navCtrl.setRoot(WelcomePage);
    this.auth.logout();
  }
}
