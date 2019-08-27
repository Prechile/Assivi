import { FavoriteMovieProvider } from "../../providers/favorite-movie/favorite-movie";
import { MovieDetailPage } from "../movie-detail/movie-detail";
import { IMovie } from "../../interface/IMovie";
import { Component } from "@angular/core";
import { NavController,IonicPage,ToastController, NavParams } from "ionic-angular";


/**
 * Generated class for the LoginNumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @IonicPage()
@Component({
  selector: 'page-login-num',
  templateUrl: 'login-num.html',
})
export class LoginNumPage {

   favoriteMovies: IMovie[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favoriteMovieProvider: FavoriteMovieProvider,
    public toast: ToastController) {


        this.toast.create({
      showCloseButton: true,
      closeButtonText: 'Ok',
      message: 'Ces films seront retirés aussitôt la date de diffusion dépassé',
      duration: 8000,
      position: 'middle'
      }).present();

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyMoviesPage");
  }

  ionViewWillEnter() {
    this.initFavoriteMovies();
  }

  initFavoriteMovies() {
    this.favoriteMovieProvider
      .getFavoriteMovies()
      .then(favs => (this.favoriteMovies = favs));
  }

  findMovie() {
    this.navCtrl.push('MovieListPage');

    let toast =  this.toast.create({
        message:'vérifiez vos données mobiles ou votre Wi-Fi et tirer vers le bas pour actuliser',
        duration: 3000,
      });
     toast.present();
  }

  goToDetail(movie: IMovie) {
    this.navCtrl.push(MovieDetailPage, movie);

  }


}
