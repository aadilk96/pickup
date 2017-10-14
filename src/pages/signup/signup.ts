import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';
 
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  firstName = "";
  lastName = "";
  password = "";
  passwordConfirm = "";
  email = "";
  age: number;

  constructor(public navCtrl: NavController, public alCtrl: AlertController, private auth: AuthProvider) {
  }

  signup() {
    var res = this.validate();
    if (res == '') {
      this.auth.createEmailAccount(this.email, this.password, this.firstName + ' ' + this.lastName);
      this.auth.onAuthChanged(user => {
        if (user != null) {
          this.success();
        }
      })
    } else {
      this.alCtrl.create({title: res, buttons: ['OK']}).present();
    }
  }

  success() {
    this.navCtrl.push(TabsPage);
  }

  validate() {
    if (this.age == null) {
      return "Please enter your age.";
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