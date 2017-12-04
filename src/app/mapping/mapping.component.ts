import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
   templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  constructor(private _commonService : CommonService) { }

  ngOnInit() {
  }

  get roomType():any{
    return this._commonService.rooms;
  }

   set roomType(value:any){
      this._commonService.rooms=value
   }

   get ac():any{
    return this._commonService.airCondition;
  }

   set ac(value:any){
      this._commonService.airCondition=value
   }

   get gender():any{
    return this._commonService.gender;
  }

   set gender(value:any){
      this._commonService.gender=value
   }

   get city():any{
    return this._commonService.city;
  }

   set city(value:any){
      this._commonService.city=value
   }

   get address():any{
    return this._commonService.address;
  }

   set address(value:any){
      this._commonService.address=value
   }

   changeCity(event:any){
      console.log(event.target.value);
      this._commonService.getAddress(event.target.value);
   }

}
