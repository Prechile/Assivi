import { MovieApiProvider } from "../../providers/movie-api/movie-api";
import { IMovie } from "../../interface/IMovie";
import { Component } from "@angular/core";
import { NavController, IonicPage, ToastController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-movie-list",
  templateUrl: "movie-list.html"
})
export class MovieListPage {
  movies = new Array<IMovie>();


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast:ToastController,
    private movieApiProvider: MovieApiProvider
  ) {

this.toast.create({
         showCloseButton: true,
        closeButtonText: 'Ok',
        message:'vérifiez vos données mobiles ou votre Wi-Fi et tirer vers le bas pour actualiser',
        duration: 3000,
      }).present();

  }

  ionViewDidLoad() {
    this.movieApiProvider.getMovies().subscribe(data => {
      this.movies = data;
    },(err)=>{console.log(err)
      let toast = this.toast.create({
        message:'Aucune connexion internet, vérifiez vos données mobiles ou votre Wi-Fi',
        duration: 3000,
      });
      toast.present();
    }
    );
  }

  goToDetail(movie: IMovie) {
    this.navCtrl.push('MovieDetailPage', movie);
  }


   doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 3000);
  }
}
