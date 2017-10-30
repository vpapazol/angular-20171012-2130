import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Output() enter: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}
  
  public logIn() {
    this.enter.emit();
  }

}
