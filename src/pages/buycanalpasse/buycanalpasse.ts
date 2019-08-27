import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController,ToastController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { FavoriteMovieProvider } from "../../providers/favorite-movie/favorite-movie";
import { IMovie } from "../../interface/IMovie";
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/observable/fromPromise';

/**
 * Generated class for the BuycanalpassePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buycanalpasse',
  templateUrl: 'buycanalpasse.html',
})
export class BuycanalpassePage implements OnInit {
  url = 'https://paygateglobal.com/api/v1/pay';
  movie: IMovie;
  isFavorite: boolean = false;
  formlogin : FormGroup;
  auth_token:'848fr85gtt8'

   mode: string;
   tel: number;
   sum: number;
   prix:string;

   // number of adult
  public adults:number = 0;
  // number of children
  public children:number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    private favoriteMovieProvider: FavoriteMovieProvider,
    public load: LoadingController,
    public formBuilder : FormBuilder,
    public alertCtrl : AlertController,
    public http:Http,

  ) {

this.formlogin = this.formBuilder.group({


                    mode : new FormControl('', Validators.compose([
                         Validators.required
                    ])),
                     tel : new FormControl('', Validators.compose([
                         Validators.required
                    ])),
                     sum : new FormControl('', Validators.compose([
                         Validators.required
                    ]))
            });

  }


  ngOnInit() { }

  ionViewDidLoad() {
    this.movie = this.navParams.data;
    this.favoriteMovieProvider
      .isFavortieMovie(this.movie)
      .then(value => (this.isFavorite = value));
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.favoriteMovieProvider.toogleFavoriteMovie(this.movie);
  }

  effectuer(){

    let me = this;
        if(me.formlogin.valid && this.sum !=0){

      const load = this.load.create({
      duration:2000,
      content: "Opération en cours...patienté svp"
    });
load.present();
    // show message


      let headers = new Headers();
  headers.append('content-type', 'application/x-www-form-urlencoded');
  let options = new RequestOptions({headers:headers});
  let data= '&auth_token =' +this.auth_token + 'phone_number=' +this.tel + '&amount=' +this.sum + 'Achat de ticket canal olympia';
  console.log('credentials:', data);
  this.http.post('https://paygateglobal.com/api/v1/pay',data,options )
    .subscribe(res=>{
      res.json();


     this.navCtrl.push('EffectuerAchatPage',{
      adults:this.adults,
      mode:this.mode,
      tel:this.tel,
      sum:this.sum,
      children:this.children
    });


    },  (err)=>{console.log(err)

      let toast = this.toast.create({
         showCloseButton: true,
      closeButtonText: 'OK',
      message: 'Aucune connexion internet ou erreur de connexion...',
      duration: 8000,
      position: 'bottom'
      });
      toast.present();
    } );

}
          else {
          const alert = this.alertCtrl.create({
      title: '<img src="assets/imgs/error.png">',
      subTitle: 'Veuillez remplir tous les champs ou ajouter un montant',
      buttons: ['OK']
    });
    alert.present();
  }
        }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

}





