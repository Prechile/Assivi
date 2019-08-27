import { Component } from '@angular/core';
import { NavController,LoadingController, NavParams, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { pages } from '../slides/pages';
import { AndroidPermissions } from '@ionic-native/android-permissions';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
salle:string;

  constructor(public navCtrl: NavController,public storage:Storage,
   public navParams: NavParams,public load:LoadingController, public popoverCtrl: PopoverController,
    public androidPermissions: AndroidPermissions) {


        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
  result => console.log('Has permission?',result.hasPermission),
  err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
);
this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);


  }

  ionViewDidLoad() {



    console.log('ionViewDidLoad HomePage');

      this.storage.get('intro-done').then(done =>{
        if(!done){
          this.storage.set('intro-done', true);
          this.navCtrl.setRoot(pages)
        }
      })

  }

onChange(){
   const load = this.load.create({
      spinner:'hide',
      duration:2000,
      content: "En cours..."

    });
load.present();
  this.navCtrl.push('DayPage',
    {
      salle:this.salle
    });



}



}
