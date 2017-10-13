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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    IonicModule.forRoot(MyApp)
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
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
