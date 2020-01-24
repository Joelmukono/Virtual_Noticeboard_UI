import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser = new User(0,"","");
@Output() addUser = new EventEmitter<User>();

  submitUser(){
this.addUser.emit(this.newUser);
  }

  constructor() { }

  ngOnInit() {
  }

}
