import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css']
})
export class UserCardListComponent implements OnInit {
  public user;
  public users;
  public userSelected;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.users = this._userService.getAll();//.subscribe(users => this.users = users);
  }

  removeUser(name: string) {
    console.log('event: ' + name);
    this._userService.remove(name);
    this.users = this._userService.getAll();
  }

  selectCard(element) {
    /*
    for (let i = 0; i < this.users.length; i++) {
      this.users[i].class = 'card';
    }
*/
    if(element.class === 'selected')
    {
      element.class = 'card';
    }
    else {
      element.class = 'selected';
    }
  }

}
