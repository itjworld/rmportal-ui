import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { CommonService } from './../services/common.service';
import { FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AuthenticationService} from './../services/authentication.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  options: DatepickerOptions = {
    locale: frLocale,
    
  };
  roomBookForm : FormGroup;
  constructor(private _commonService : CommonService, fb: FormBuilder,private _service : AuthenticationService,  private alertService: AlertService) { 
    this.roomBookForm = fb.group({
      'rent': ['', Validators.required],
      'addressId': ['', Validators.required],
      'cityId': ['', Validators.required],
      'email':['', Validators.required],
      'address':['', Validators.required],
      'mobile': ['', [Validators.required]],
      'fName': ['', [Validators.required]],
      'lName': ['', [Validators.required]],
      'security': ['', [Validators.required]],
      'desc': ['', [Validators.required]],
      'relation': ['', [Validators.required]],
      'roomNo': ['', [Validators.required]],
      'relationMobile': ['', [Validators.required]],
      'checkindate': ['', [Validators.required]],
      'paddress': ['', [Validators.required]],
      'profession': ['', [Validators.required]],
      'dob': ['', [Validators.required]],
    })
  }

  ngOnInit() {
    //this._service.checkCredentials();
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
    this.alertService.clear();
    if (this.roomBookForm.dirty && this.roomBookForm.valid) {
      let roomBook:any={fName:this.roomBookForm.value.fName,lName:this.roomBookForm.value.lName,
        roomNo:this.roomBookForm.value.roomNo,desc:this.roomBookForm.value.desc,addressId:this.roomBookForm.value.addressId,
        relativeMobile:this.roomBookForm.value.relationMobile,
        relation:this.roomBookForm.value.relation,mobile:this.roomBookForm.value.mobile,
        email:this.roomBookForm.value.email,rent:this.roomBookForm.value.rent,
        security:this.roomBookForm.value.security,address:this.roomBookForm.value.address,
        checkindate:this.roomBookForm.value.checkindate,
        paddress:this.roomBookForm.value.paddress,
        profession:this.roomBookForm.value.profession,dob:this.roomBookForm.value.dob};
      this._commonService.updateRoomBooked(roomBook).subscribe((result=>{
        console.info("save : " + result.message);
        if(result){
          this.alertService.success(result.message);
          this.roomBookForm.reset;
       }
       else{
         this.alertService.error(result.message);
          }
    }), err => this.alertService.error("Problem exists while booking room!"));
    window.scrollTo(0, 0);
    }    
   }
}
