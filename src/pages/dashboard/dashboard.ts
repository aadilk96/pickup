import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { WelcomePage } from '../welcome/welcome';
import { AlertController } from 'ionic-angular';

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


