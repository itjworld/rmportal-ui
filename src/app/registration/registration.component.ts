import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { AlertService } from '../alert/alert.service';
import { FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupForm : FormGroup;
  constructor(private _commonService : CommonService, fb: FormBuilder, private alertService: AlertService) { 
    this.signupForm = fb.group({
      'fName': ['', Validators.required],
      'lName': ['', Validators.required],
      'email': ['', Validators.required],
      'username': ['', Validators.required],
      'password':['', Validators.required],
      'cpassword': ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  submitForm(){    
    this.alertService.clear();
    if (this.signupForm.dirty && this.signupForm.valid) {
      let registration:any={fName:this.signupForm.value.fName,lName:this.signupForm.value.lName,
        password:this.signupForm.value.password,email:this.signupForm.value.email,
        username:this.signupForm.value.username};
      console.log(registration);
      this._commonService.registration(registration).subscribe((result=>{
          console.info("save : " + result.message);
          if(result){
            this.alertService.success(result.message);
         }
         else{
           this.alertService.error(result.message);
            }
      }), err => this.alertService.error("Registration failed !"));
    }    
   }

}
