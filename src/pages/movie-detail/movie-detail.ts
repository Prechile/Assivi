import { FavoriteMovieProvider } from "../../providers/favorite-movie/favorite-movie";
import { IMovie } from "../../interface/IMovie";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MovieApiProvider } from "../../providers/movie-api/movie-api";

@IonicPage()
@Component({
  selector: "page-movie-detail",
  templateUrl: "movie-detail.html"
})
export class MovieDetailPage {
  movie: IMovie;
  isFavorite: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
 public movieApiProvider: MovieApiProvider,
 public favoriteMovieProvider:FavoriteMovieProvider  ) {}

  ionViewDidLoad() {
    this.movie = this.navParams.data;
    this.favoriteMovieProvider
      .isFavortieMovie(this.movie)
      .then(value => (this.isFavorite = value));
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.favoriteMovieProvider.toogleFavoriteMovie(this.movie);
    //this.navCtrl.push(LoginNumPage);
  }

   movies = new Array<IMovie>();


  buypasse(movie: IMovie) {
    this.navCtrl.push('BuycanalpassePage', movie);
  }
}
