import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Iletters} from "./iletters";
import {Iletter} from "./iletter";




@Injectable()
export class LettersService {

  constructor(private _http: HttpClient) {
  }

  getLetters(url) {
   return this._http.get<Iletters>(url);
  }

  getOneLetter(url) {
    return this._http.get<Iletter>(url);
  }

}
