import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _userService;
  public users;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  ngOnInit() {
    this.users = this._userService.getAll();
  }

  public selectedUser = null;
  public selectUser(user): void {
    switch (this.selectedUser) {
      case null:
        this.selectedUser = user;
        user.selected = `selected`;
        break;
      case user:
        user.selected = ``;
        this.selectedUser = null;
        break;
      default:
        this.selectedUser.selected = ``;
        this.selectedUser = user;
        user.selected = `selected`;
    }
  }

  public hideCard(user) {
    user.visible = false;
  }

}
