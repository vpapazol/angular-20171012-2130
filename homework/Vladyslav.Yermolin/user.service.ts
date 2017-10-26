import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {}

  public getAll() {
    return this._http.get('http://test-api.javascript.ru/v1/vladyer/users');
  }

  /*public remove(name: string) {
    return this.users.filter(user => user.name !== name);
  }*/


}
