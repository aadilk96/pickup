import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchCourtPage } from './searchcourt';

@NgModule({
  declarations: [
    SearchCourtPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchCourtPage),
  ],
})
export class SearchCourtPageModule {}
