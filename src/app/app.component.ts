import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController,LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { LoginNumPage } from '../pages/login-num/login-num';
import { SettingsProvider } from '../providers/settings/settings';
import { Storage } from '@ionic/storage';

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  selectedTheme: String;
  rootPage: any = HomePage;

  showSplash = true;

  pages: Array<{icon:string, title: string, component: any}>;
  exits: Array<{icon:string, title: string, component: any}>;

  constructor(public platform: Platform,
    public alert: AlertController, public statusBar:StatusBar,
     public settings: SettingsProvider,
     public splashScreen: SplashScreen,
     public loadingCtrl:LoadingController,
     public storage: Storage) {

    this.initializeApp();
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

    // used for an example of ngFor and navigation
    this.pages = [
      { icon:"home", title: 'Acceuil', component: HomePage },
      { icon:"star", title: 'Films favoris', component: LoginNumPage },
      { icon:"card", title: 'Mes Opérations', component: null },
      { icon:"help", title: 'FAQ', component: null },
      { icon:"information-circle", title: 'Info App', component: LoginPage },
    ];

    this.exits = [
      { icon:"exit", title: 'Quitter', component: null },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#B73235')
      this.splashScreen.hide();

      timer(3000).subscribe(()=> this.showSplash = false)

    });
  }

  exit(){

    let confirm = this.alert.create({
      title: "Quitter l'application ?",
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log('Agree clicked');
             this.platform.exitApp();
          }
        }
      ]
    });
    confirm.present()

  }

  AppTheme(){
     if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
      this.statusBar.backgroundColorByHexString('#B73235')
    } else {
      this.settings.setActiveTheme('dark-theme');
        this.statusBar.backgroundColorByHexString('#141A21');
    }
  }

   openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);

  }


}
