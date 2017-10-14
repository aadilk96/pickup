import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';

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

  constructor(public alertCtrl: AlertController, private db: DatabaseProvider, private auth: AuthProvider) {
    let userid = this.auth.getCurrentUserId();
    console.log(userid);
    this.db.onGetUser(userid, snapshot => {
      console.log(this.user);
      console.log(snapshot.val());
      this.user = snapshot.val();
    });
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


