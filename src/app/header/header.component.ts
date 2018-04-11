import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isIn = false;   // store state
  username:String;
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }
  constructor(private _router : Router,private _service:AuthenticationService) {
    if(this._service.roles && this._service.roles.length==0){
      var result=localStorage.getItem("ROLES");
      if(result && result!=null && result!=''){
        this._service.roles=result.split(",");
      }
    }
  }

  ngOnInit() {
    
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['home']);
  }

  checkCredentials( ): boolean{
    if (localStorage.getItem("user") === null){     
      return false;
    }
    return true;
  } 

  getName( ): String{
    return localStorage.getItem("user");
  }
  
  hasRole(role: string): boolean {
    let userRoles;
    if (role && role != null && role != '') {
      userRoles = role.split(",");
    }
     for (let r of this._service.roles) {
      for (let ur of userRoles) {
        if (r.toUpperCase() === ur.toUpperCase()) {
          return true;
        }
      }
    }
    return false;
  }  

}
