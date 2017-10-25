import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
  private users = [
    {name: 'User 1'},
    {name: 'User 2'},
    {name: 'User 3'},
  ]

  constructor() {
  }

  public getAll(){
    //return this._http.get('https://jsonplaceholder.typicode.com/users');
    return this.users;
  }

  public remove(name: string){
    return this.users = this.users.filter(value => value.name !== name)
  }

  public add(name: string){
    this.users.push({name})
  }
}
