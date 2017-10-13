import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';

import { FeedPage } from '../feed/feed';

import { AchievementsPage } from '../achievements/achievements'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = FeedPage;
  tab3Root = AchievementsPage;

  constructor() {

  }
}
