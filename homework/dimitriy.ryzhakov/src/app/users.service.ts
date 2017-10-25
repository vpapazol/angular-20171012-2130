import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class UsersService {

  private userlist = {
    users: [
      {
        fullName: 'James',
        email: 'test1@gmail.com',
        avatarUrl: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png',
        birthdate: new Date(2015, 4, 1)
      },
      {
        fullName: 'Kate',
        email: 'test2@gmail.com',
        avatarUrl: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png',
        birthdate: new Date(1993, 2, 4)
      },
      {
        fullName: 'William',
        email: 'test3@gmail.com',
        avatarUrl: 'https://i2.wp.com/www.mesrobian.org/wp-content/uploads/2016/10/Avatar-Male.png?resize=180%2C180',
        birthdate: new Date(1991, 3, 1)
      },
      {
        fullName: 'John',
        email: 'test4@gmail.com',
        avatarUrl: 'https://pbs.twimg.com/profile_images/867283888791486464/cL6V1073.jpg',
        birthdate: new Date(1996, 3, 7)
      },
    ]
  }

  getData() {
    return this.userlist;
  }


  constructor(private _http: HttpClient) {
  }

  getUsers() {
    return this._http.get('http://test-api.javascript.ru/v1/dimitriyryzhakov/users');
  }

  postUsers(dataUrl) {
    return this._http.post('http://test-api.javascript.ru/v1/dimitriyryzhakov/', dataUrl);
  }

  removeUser(_id) {
    return this._http.delete('http://test-api.javascript.ru/v1/dimitriyryzhakov/users/' + _id,
        { responseType: 'text'});
  }

}
