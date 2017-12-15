import { Injectable } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { CommonService } from '../services/common.service';
import {IUserDetail} from '../beans/userdetail';

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
    private _router: Router, private _service : CommonService){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user){
    // var authenticatedUser = users.find(u => u.email === user.email);
    this._service.validate(user).subscribe((data)=>{
      this.userDetail=data;
      //console.log(this.userDetail);
      if (this.userDetail != null){
        localStorage.setItem("user", this.userDetail.username);
        this._router.navigate(['address']);      
        return true;
      }
      return false;
    })
    

  }

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 
}
