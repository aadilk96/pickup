import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { DatabaseProvider } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  User = "Account";
  user: User = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    birthday: '',
    joindate: '',
    userId: ''
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private db: DatabaseProvider, private auth: AuthProvider, private dp: DataProvider) {
    let userid = this.auth.getCurrentUserId();
    console.log(userid);
    this.db.onGetUser(userid, snapshot => {
      console.log(this.user);
      console.log(snapshot.val());
      this.user = snapshot.val();
    });
  
  }

  logout() {
    this.navCtrl.setRoot(WelcomePage);
    this.auth.logout();
  }

  showInputPrompt(name, placeholder) {
    let prompt = this.alertCtrl.create({
      title: 'Edit ' + placeholder,
      inputs: [
        {
          name: name,
          placeholder: placeholder
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
          }
        }
      ]
    });
    prompt.present();
  }

  showPromptFirstName() {
    this.showInputPrompt('FirstName', 'First Name');
  }

  showPromptLastName() {
    this.showInputPrompt('LastName', 'Last Name');
  }
  
  showPromptAge() {
    this.showInputPrompt('Age', 'Age');
  }

  showPromptEmail() {
    this.showInputPrompt('Email', 'Email');
  }

  showPromptPass() {
    this.showInputPrompt('Pass', 'Password');
  }
  
}


