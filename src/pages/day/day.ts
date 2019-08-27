import { Component,ViewChild } from '@angular/core';
import { NavController,LoadingController, PopoverController,IonicPage, NavParams } from 'ionic-angular';
import { IMovie } from "../../interface/IMovie";
import { MovieApiProvider } from "../../providers/movie-api/movie-api";
import { Slides } from 'ionic-angular';

/**
 * Generated class for the DayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-day',
  templateUrl: 'day.html',
})
export class DayPage {
  @ViewChild(Slides) slides: Slides;
   salle:string;
   movies = new Array<IMovie>();
   currentDate = new Date().toLocaleDateString();
   mar = new Date().getDate()+1;
   mer = new Date().getDate()+2;
   jeu = new Date().getDate()+3;
   ven = new Date().getDate()+4;
   sam = new Date().getDate()+5;
   dim = new Date().getDate()+6;


  constructor(public navCtrl: NavController, public navParams: NavParams,
   public popoverCtrl:PopoverController,public load:LoadingController
   ,private movieApiProvider:MovieApiProvider) {

        this.salle = navParams.get('salle');

  }

  ionViewDidLoad() {
    // this.slides.autoplay = 2000;
    // this.slides.loop = true;
    // this.slides.speed = 500;

    console.log('ionViewDidLoad DayPage');
     this.movieApiProvider.getMovies().subscribe(data => {
      this.movies = data;
    },(err)=>{console.log(err)

    }
    );

  }

  voir(){
    this.navCtrl.push('MovieListPage'
      );

  }

    presentPopover(ev) {

    let popover = this.popoverCtrl.create('MorePage');

    popover.present({
      ev: ev
    });
  }

}
