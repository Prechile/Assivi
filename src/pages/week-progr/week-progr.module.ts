import { NgModule } from '@angular/core';
import { IonicPageModule,IonicPage } from 'ionic-angular';
import { WeekProgrPage } from './week-progr';

@NgModule({
  declarations: [
    WeekProgrPage,
  ],
  imports: [
    IonicPageModule.forChild(WeekProgrPage),
  ],
})
export class WeekProgrPageModule {}
