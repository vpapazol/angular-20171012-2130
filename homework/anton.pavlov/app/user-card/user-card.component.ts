import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public cardClass = 'card';

  @Input() user;
  @Output() userRemoved: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectUser() {
    if (this.cardClass === 'selected') {
      this.cardClass = 'card';
    } else {
      this.cardClass = 'selected';
    }
  }
  removeUser(id) {
    this.userRemoved.emit(id);
  }
}
