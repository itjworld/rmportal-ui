import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonService } from './../services/common.service';
import {AddressConfig} from '../beans/address';
import { from } from 'rxjs/observable/from';


@Component({  
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressForm : FormGroup;
  // information : AddressConfig;
  locations : String[];
  constructor(private _commonService : CommonService, fb: FormBuilder) { 
    this.addressForm = fb.group({
      'fName': ['', Validators.required],
      'lName': ['', Validators.required],
      'location':['', Validators.required],
      'email': ['', [Validators.required]],
      'street1': ['', [Validators.required]],
      'street2': ['', [Validators.required]],
      'zip': ['', [Validators.required]],
      'mobile': ['', [Validators.required, Validators.minLength(10)]]
    })
  }

   ngOnInit() {
    // this.information = new AddressConfig();
  }

  get city():any{
    return this._commonService.city;
  }

   set city(value:any){
      this._commonService.city=value
   }

   submitForm(){
  
    if (this.addressForm.dirty && this.addressForm.valid) {
    let address:any={name:this.addressForm.value.fName + " " + this.addressForm.value.lName,email:this.addressForm.value.email,
      mobile:this.addressForm.value.mobile,street1:this.addressForm.value.street1,
      street2:this.addressForm.value.street2,location:this.addressForm.value.location};
    console.log(address);
    this._commonService.saveAddressDetails(address).subscribe((address=>{
        console.info("save");
    }));
  }
   }

}
