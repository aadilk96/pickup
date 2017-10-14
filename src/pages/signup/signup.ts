import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';
import { DatabaseProvider } from '../../providers/database/database';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user: User = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    birthday: "",
    joindate: "",
    uid: ""
  }

  password = "";
  passwordConfirm = "";

  constructor(public navCtrl: NavController, public alCtrl: AlertController, private auth: AuthProvider, private db: DatabaseProvider) {
  }

  signup() {
    var res = this.validate();
    this.user.displayName = this.user.firstName + " " + this.user.lastName;
    if (res == '') {
      this.auth.createEmailAccount(this.user.email, this.password, this.user.displayName);
      this.auth.onAuthChanged(user => {
        if (user != null) {
          this.user.uid = user.uid;
          this.user.joindate = this.getCurrentDate();
          this.success();
        }
      })
    } else {
      this.alCtrl.create({title: res, buttons: ['OK']}).present();
    }
  }

  getCurrentDate() {
    var now = new Date();
    return now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
  }

  success() {
    this.db.createUser(this.user);
    this.navCtrl.setRoot(TabsPage);
  }

  isOverage(){
    let now = new Date();
    now.setFullYear(now.getFullYear() - 14);
    return now.getTime() >= new Date(this.user.birthday).getTime();
  }

  validate() {
    if (!this.isOverage()) {
      return "You have to be 14 or older to use this app.";
    } else if (this.password != this.passwordConfirm) { 
      return "Passwords don't match.";
    } else if (this.password.length < 6) {
      return "Password too short.";
    // } else if (/\S+@\S+\.\S+/.test(this.email)) {
    //   return "Invalid Email address.";
    } else {
      return '';
    }
  }
} 