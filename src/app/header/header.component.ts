import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isIn = false;   // store state
  username:String;
  private roles:string[]=[];
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }
  constructor(private _router : Router) {
    var result=localStorage.getItem("ROLES");
    if(result && result!=null && result!=''){
      this.roles=result.split(",");
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
  
    hasRole(role:string):boolean{
      for(let r of this.roles){
        if(r.toUpperCase()===role.toUpperCase()){
          return true;
        }
      }
      return false;
    }  

}
