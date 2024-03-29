import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'template.html',
  selector:'page-template'
})
export class pages {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,

  ) { }

   slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/slide1.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/fond.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/card.jpg",
    }
  ];

  goToHome(){
    this.navCtrl.setRoot(HomePage)
  }

}
