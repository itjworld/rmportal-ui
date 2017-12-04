import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  locations : String[];
  constructor(private _commonService : CommonService) { }

   ngOnInit() {
    //this.locations[0] = "noida";
  }

  get city():any{
    return this._commonService.city;
  }

   set city(value:any){
      this._commonService.city=value
   }

}
