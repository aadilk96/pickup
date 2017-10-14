import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourtSelectionPage } from './courtselection';

@NgModule({
  declarations: [
    CourtSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(CourtSelectionPage),
  ],
})
export class CourtSelectionPageModule {}
