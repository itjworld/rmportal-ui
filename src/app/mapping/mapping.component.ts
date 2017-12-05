import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from './../services/common.service';
import { MappingConfig } from '../beans/mapping';

@Component({
   templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})

export class MappingComponent implements OnInit {

  constructor(private _commonService : CommonService) { }
  @Input() mapping: MappingConfig;

  ngOnInit() {
    this.mapping=new MappingConfig();
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

   submitForm(){
    console.log(this.mapping)
    this._commonService.saveMappingDetails(this.mapping);
   }

}
