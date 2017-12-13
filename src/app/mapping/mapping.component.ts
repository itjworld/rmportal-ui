import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from './../services/common.service';
import { FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MappingConfig } from '../beans/mapping';

@Component({
   templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})

export class MappingComponent implements OnInit {
  mappingForm : FormGroup;
  constructor(private _commonService : CommonService, fb: FormBuilder) { 
    this.mappingForm = fb.group({
      'rent': ['', Validators.required],
      'addressId': ['', Validators.required],
      'cityId': ['', Validators.required],
      'roomTypeId':['', Validators.required],
      'acId': ['', [Validators.required]],
      'genderId': ['', [Validators.required]],
      'roomNo': ['', [Validators.required]],
      'security': ['', [Validators.required]],
      'desc': ['', [Validators.required]]
    })
  }
  // @Input() mapping: MappingConfig;

  ngOnInit() {
    // this.mapping=new MappingConfig();
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

    if (this.mappingForm.dirty && this.mappingForm.valid) {
      let mapping:any={cityId:this.mappingForm.value.cityId,addressId:this.mappingForm.value.addressId,roomTypeId:this.mappingForm.value.roomTypeId,
        acId:this.mappingForm.value.acId,genderId:this.mappingForm.value.genderId,
        roomNo:this.mappingForm.value.roomNo,rent:this.mappingForm.value.rent,
        security:this.mappingForm.value.security,desc:this.mappingForm.value.desc};
      console.log(mapping);
      this._commonService.saveMappingDetails(mapping).subscribe((mapping=>{
          console.info("save");
      }));
    }    
   }

}
