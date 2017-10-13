import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
  }

  // takes email, password and display name
  // returns null if succeeded
  // returns error if failed (check error.message, error.code)
  createEmailAccount(email, password, name) {
    // try to create user
    this.auth.auth.createUserWithEmailAndPassword(email, password).catch(error => {
      console.error(error.message);
      return error;
    });

    // create account
    this.auth.auth.onAuthStateChanged(user => {
      if (this.isLoggedIn()) {
        // add display name
        user.updateProfile({displayName: name, photoURL: ""}).then(a => {
          // send email verification
          user.sendEmailVerification();
          return null;
        });
      }
    })
  }

  // takes email and password
  // returns null if succeeded
  // returns error if failed (check error.message, error.code)
  // call the function onauthchanged to handle event when user gets authorized
  signInEmail(email, password) {
    // try to login
    this.auth.auth.signInWithEmailAndPassword(email, password).catch(error => {
      console.error(error.message);
      return error;
    })
  }

  // takes a function (user => void)
  onAuthChanged(fun) {
    this.auth.auth.onAuthStateChanged(fun);
  }

  isLoggedIn() {
    return this.auth.auth.currentUser != null;
  }

  getDisplayName() {
    return (this.isLoggedIn()) ? this.auth.auth.currentUser.displayName : null;
  }

  getEmail() {
    return (this.isLoggedIn()) ? this.auth.auth.currentUser.email : null;
  }

  isVerifiedEmail() {
    return (this.isLoggedIn()) ? this.auth.auth.currentUser.emailVerified : null;
  }
}
