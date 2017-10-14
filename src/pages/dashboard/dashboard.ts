import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { DatabaseProvider } from '../../providers/database/database';
import { WelcomePage } from '../welcome/welcome';
import { AlertController } from 'ionic-angular';

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
  constructor(public alertCtrl: AlertController) {
  }

  showPromptFirstName() {
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      inputs: [
        {
          name: 'FirstName',
          placeholder: 'First Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

<<<<<<< HEAD
  showPromptLastName() {
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      inputs: [
        {
          name: 'LastName',
          placeholder: 'Last Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
=======
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
>>>>>>> 565a63075bfcc6c697e6a13116352cbcc639cfc1
  }

  showPromptAge() {
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      inputs: [
        {
          name: 'Age',
          placeholder: 'Age'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showPromptEmail() {
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showPromptPass() {
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      inputs: [
        {
          name: 'Pass',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  
}


