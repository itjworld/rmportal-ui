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
  roles:string[]=[];
  constructor(
    private _router: Router, private _service : CommonService,private alertService: AlertService){}

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("ROLES");
    this.roles=[];
    this._router.navigate(['home']);

  }

  login(user){
    this.alertService.clear();
  /*  this._service.validate(user).subscribe((data)=>{
      this.userDetail=data;
      //console.log(this.userDetail);
      if (this.userDetail != null){
        localStorage.setItem("user", this.userDetail.username);
        this._router.navigate(['record']);      
      }else{
        console.log("failure");
        this.alertService.error('Failed to login');
      }
      
    }, err => this.alertService.error("invlalid credentials !"));
    */
    this._service.login(user).subscribe((data)=>{
       if(data['status']==200){
        localStorage.setItem("user", data['USER']);
        localStorage.setItem("ROLES", data['ROLES']);
        var result=localStorage.getItem("ROLES");
        if(result && result!=null && result!=''){
          this.roles=result.split(",");
        }
        this._router.navigate(['/']);
       }else if(data['status']==401){
          this.alertService.error(data['message']);
       }else{
         this.alertService.error('Failed to login');
       }
        
    });
  }

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 
}
