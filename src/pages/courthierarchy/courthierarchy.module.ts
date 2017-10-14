import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourtHierarchyPage } from './courthierarchy';

@NgModule({
  declarations: [
    CourtHierarchyPage,
  ],
  imports: [
    IonicPageModule.forChild(CourtHierarchyPage),
  ],
})
export class CourtHierarchyPageModule {}
