import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapCourtsPage } from './mapcourts';

@NgModule({
  declarations: [
    MapCourtsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapCourtsPage),
  ],
})
export class MapCourtsPageModule {}
