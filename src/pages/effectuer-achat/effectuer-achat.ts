import { Component } from '@angular/core';
import { IMovie } from "../../interface/IMovie";
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

/**
 * Generated class for the EffectuerAchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-effectuer-achat',
  templateUrl: 'effectuer-achat.html',
})
export class EffectuerAchatPage {

   adults: number;
   mode: string;
    tel: number;
   sum: number;
   children: number;

  movie:IMovie;
  createCode : any;
  scannedCode: any;
  options :BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner, public socialSharing: SocialSharing,
    private file: File, public alert:AlertController,
    private fileOpener: FileOpener ) {

  	this.adults = navParams.get('adults');
  	this.mode = navParams.get('mode');
  	this.tel = navParams.get('tel');
    this.sum = navParams.get('sum');
    this.children = navParams.get('children');

   // this.navCtrl.popTo(BuycanalpassePage);

  	this.createCode = this.adults +' ticket(s) adulte et ' + this.children +' ticket(s) pour enfant achetés' + ' sur '+ this.mode +
     ' au prix de '+ this.sum +"F";

     this.alert.create({
      title: '<img src="assets/imgs/success.png">',
      subTitle: 'Opération efectuée avec succes',
      buttons: ['OK']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EffectuerAchatPage');
  }


   scanner(){

    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log(`Error: item_create::scanVin! ${err}` );
    });
  }

  //Save Image Function
  saveImg() {
    let imageName= 'code.png';
    const ROOT_DIRECTORY = 'file:///sdcard//';
    const downloadFolderName = 'Assivi';

    //Create a folder in memory location
    this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then((entries) => {

        //Copy our asset/img/FreakyJolly.jpg to folder we created
        this.file.copyFile(this.file.applicationDirectory + "www/assets/imgs/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
          .then((entries) => {

            //Open copied file in device's default viewer
            this.fileOpener.open(ROOT_DIRECTORY + downloadFolderName + "/" + imageName, 'image/jpeg')
              .then(() => console.log('File is opened'))
              .catch(e => alert('Error' + JSON.stringify(e)));
          })
          .catch((error) => {
            alert('error ' + JSON.stringify(error));
          });
      })
      .catch((error) => {
        alert('error' + JSON.stringify(error));
      });


  }


  shareImg(message) {

      this.socialSharing.share(message,"Hello world",null,"http:www.google.com").then(()=>{

      },

      ()=>{
        let alert = this.alert.create({
          message:"Error"
        });
        alert.present();
      }
      )

  }

}
