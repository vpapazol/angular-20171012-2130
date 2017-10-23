import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userlist: Array<object>;
  @Output() removeItem: EventEmitter<object> = new EventEmitter();

  public selectedIndex;


  public getItem(i: object): void {
    this.removeItem.emit(i);
  }

  public activeItem(item: object): void {
    this.selectedIndex = item;
  }

  constructor() { }

  ngOnInit() {
  }

}
