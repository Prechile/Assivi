import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EffectuerAchatPage } from './effectuer-achat';

@NgModule({
  declarations: [
  EffectuerAchatPage
  ],
  imports: [
    IonicPageModule.forChild(EffectuerAchatPage),
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class EffectuerAchatPageModule {}
