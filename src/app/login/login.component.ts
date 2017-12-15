import { Component, OnInit } from '@angular/core';
import {User} from '../services/authentication.service';
import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User('','');
  public errorMsg = '';

  constructor(
      private _service:AuthenticationService) {}

  login() {
      if(!this._service.login(this.user)){
          this.errorMsg = 'Failed to login';
      }
  }
  ngOnInit() {
  }

}

