import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { IMovie } from "../../interface/IMovie";

@Injectable()
export class MovieApiProvider {
  private baseUrl: string = "../assets/api/movies.json";

  movies: IMovie[];

  constructor(
    public http: HttpClient,
  ) {
    // console.log("Hello MovieApiProvider Provider");
    // if (this.platform.is("cordova") && this.platform.is("android")) {
    //   this.baseUrl = "/android_asset/www/assets/api/movies.json";
    // }
  }

  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);

  }
}
