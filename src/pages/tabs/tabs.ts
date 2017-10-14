import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { FeedPage } from '../feed/feed';
import { AchievementsPage } from '../achievements/achievements'
import { GamesPage } from '../games/games'
import { MapCourtsPage } from '../mapcourts/mapcourts'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = FeedPage;
  tab3Root = AchievementsPage;
  tab4Root = GamesPage; 
  tab5Root = MapCourtsPage; 

  constructor() {
  }
}
