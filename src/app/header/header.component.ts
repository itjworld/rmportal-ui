import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

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
  constructor(private _router : Router) { }

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

}
