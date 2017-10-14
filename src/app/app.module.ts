import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { WelcomePage } from '../pages/welcome/welcome';
import { FeedPage } from '../pages/feed/feed';
import { CreatePage } from '../pages/create/create';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { GamesPage } from '../pages/games/games';
import { AchievementsPage } from '../pages/achievements/achievements';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from '../providers/auth/auth';
import { MockDataProvider } from '../providers/mock-data/mock-data';
import { DatabaseProvider } from '../providers/database/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBmWolHQJFsC7M3f9cFb6fX_YziiymNFXo",
  authDomain: "pickup-66de4.firebaseapp.com",
  databaseURL: "https://pickup-66de4.firebaseio.com",
  projectId: "pickup-66de4",
  storageBucket: "pickup-66de4.appspot.com",
  messagingSenderId: "713680790426"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage, 
    SignupPage,
    WelcomePage, 
    FeedPage,
    CreatePage,
    DashboardPage,
    GamesPage,
    AchievementsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage, 
    SignupPage,
    WelcomePage, 
    FeedPage,
    CreatePage,
    DashboardPage,
    GamesPage,
    AchievementsPage
  ],
  providers: [
    AuthProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    MockDataProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
