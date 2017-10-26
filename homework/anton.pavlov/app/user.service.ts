import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  private userList = {
    users: [
      {fullName: 'John Doe', email: 'johndoe@gmail.com', gender: 'M', birthdate: new Date('10.18.1987')},
      {fullName: 'Bob Pitchford', email: 'pitchfordb@gmail.com', gender: 'M', birthdate: new Date('10.03.1988')},
      {fullName: 'Alice McAllan', email: 'mcaliceallan@gmail.com', gender: 'F', birthdate: new Date('09.26.1992')}
    ]
  };

  private users = [
    {fullName: 'John Doe', email: 'johndoe@gmail.com', gender: 'M', birthdate: new Date('10.18.1987')},
    {fullName: 'Bob Pitchford', email: 'pitchfordb@gmail.com', gender: 'M', birthdate: new Date('10.03.1988')},
    {fullName: 'Alice McAllan', email: 'mcaliceallan@gmail.com', gender: 'F', birthdate: new Date('09.26.1992')}
  ];

  constructor(private _http: HttpClient) {
  }

  public getAll() {
    // return this.users;
    return this._http.get('http://test-api.javascript.ru/v1/tonyp/users');
  }

  public fillDB() {
    return this._http.post('http://test-api.javascript.ru/v1/tonyp/', this.userList);
  }

  public remove(id: string) {
    // return this.users = this.users.filter(user => user.fullName !== name);
    return this._http.delete('http://test-api.javascript.ru/v1/tonyp/users/' + id);
  }

}
