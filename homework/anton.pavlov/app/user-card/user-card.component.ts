import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();
  @Output() userRemoved: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectUser() {
    this.userSelected.emit();
  }
  removeUser(name) {
    this.userRemoved.emit(name);
  }
}
