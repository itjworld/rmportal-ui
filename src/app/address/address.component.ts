import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from './../services/common.service';
import {AddressConfig} from '../beans/address';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  information : AddressConfig;
  locations : String[];
  constructor(private _commonService : CommonService) { }

   ngOnInit() {
    this.information = new AddressConfig();
  }

  get city():any{
    return this._commonService.city;
  }

   set city(value:any){
      this._commonService.city=value
   }

   submitForm(){
    console.log(this.information)
    this._commonService.saveAddressDetails(this.information).subscribe((address=>{
        console.info("save");
    }));
   }

}
