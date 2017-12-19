import { Component, OnInit } from '@angular/core';
import {User} from '../services/authentication.service';
import {AuthenticationService} from '../services/authentication.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User('','');
  public errorMsg = '';

  constructor(
      private _service:AuthenticationService, private alertService: AlertService) {}

  login() {
      this.alertService.clear();
      if(!this._service.login(this.user)){
        this.alertService.error('Failed to login');
      }
  }
  ngOnInit() {
  }

}

