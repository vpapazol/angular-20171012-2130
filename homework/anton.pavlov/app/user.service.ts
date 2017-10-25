import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

  private users = [
    {name: "John", occupation: "Developer", company: "Apple Inc.", university: "Harvard University", class: "card"},
    {name: "Bob", occupation: "Web Designer", company: "Google", university: "Oxford University", class: "card"},
    {name: "Alice", occupation: "Solicitor", company: "HHM", university: "Cambridge University", class: "card"}
  ];

  constructor(private _http: HttpClient) { }

    public getAll() {
      return this.users;
      //return this._http.get('https://jsonplaceholder.typicode.com/users');
    }

    public remove(name: string) {
      return this.users = this.users.filter(user => user.name !== name);
    }

}
