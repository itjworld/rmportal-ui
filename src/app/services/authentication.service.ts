import { Injectable } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { CommonService } from '../services/common.service';
import {IUserDetail} from '../beans/userdetail';
import { AlertService } from '../alert/alert.service';

export class User {

  constructor(
    public username: string,
    public password: string) { }
}

var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {
  userDetail:IUserDetail;
  constructor(
    private _router: Router, private _service : CommonService,private alertService: AlertService){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['home']);
  }

  login(user){
    this.alertService.clear();
    this._service.validate(user).subscribe((data)=>{
      this.userDetail=data;
      //console.log(this.userDetail);
      if (this.userDetail != null){
        localStorage.setItem("user", this.userDetail.username);
        this._router.navigate(['record']);      
      }else{
        console.log("failure");
        this.alertService.error('Failed to login');
      }
      
    }, err => this.alertService.error("invlalid credentials !"))
    

  }

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 
}
