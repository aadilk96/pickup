import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public firstName: string;
  public lastName: string;
  public password: string;
  public passwordConfirm: string;
  public email: string;
  public age: number;

  signupCredentials = { 
    firstName: '', 
    lastName: '', 
    password: '',
    passwordConfirm: '', 
    email: '', 
    age: 0 
  };  
} 