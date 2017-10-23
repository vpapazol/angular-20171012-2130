import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 // public selectedUser;
  public users;

  constructor(private _userService: UserService) {
    //this._userService = service;
  }



  ngOnInit() {
    this.users = this._userService.getAll();
  }

  removeUser(name: string){
    this.users = this._userService.remove(name);
  }

  addUser(name: string){
    if(!name){
      return;
    }
    this._userService.add(name);
  }
}
