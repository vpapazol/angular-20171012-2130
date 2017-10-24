import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input('userSentFromApp') user;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();

  public isActive = false;

  constructor() { }

  removeUser(){
    this.userSelected.emit();
  }

  ngOnInit() {
  }

}
