import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { SocialSharing } from '@ionic-native/social-sharing';


import { HomePage } from '../pages/home/home';
import { pages } from'../pages/slides/pages';
import { MorePage } from '../pages/more/more';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieApiProvider } from "../providers/movie-api/movie-api";
import { FavoriteMovieProvider } from "../providers/favorite-movie/favorite-movie";
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    pages,
      ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HttpModule,
    NgxQRCodeModule,
    ReactiveFormsModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    pages,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     MovieApiProvider,
    FavoriteMovieProvider,
    SettingsProvider,
    SocialSharing,
    File,
    FileOpener,

  ]
})

export class AppModule {}

