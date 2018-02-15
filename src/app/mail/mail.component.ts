import { Component } from '@angular/core';
import { FormsModule, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonService } from './../services/common.service';
import { AlertService } from '../alert/alert.service';
import { LoaderService } from '../services/loader.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent  {
  mail : FormGroup;
  reference:String;
  type:String;
  constructor(private _commonService : CommonService,fb: FormBuilder, private alertService: AlertService,private _loaderService: LoaderService) {
  this.mail = fb.group({
      'to': ['', Validators.required],
      'cc': '',
      'subject':['', Validators.required],
      'body': ['', [Validators.required]],
     })
   }

   submitForm(){
    this.alertService.clear();
    this._loaderService.display(true);
    if (this.mail.dirty && this.mail.valid) {
      let mailInfo:any={to:this.mail.value.to , cc:this.mail.value.cc,subject:this.mail.value.subject,
      message:this.mail.value.body,type:this.type,reference:this.reference};
      this._commonService.sendMail(mailInfo).subscribe((info=>{
        console.info("send");
        this.alertService.success("Mail Sent Successfully");
        this._loaderService.display(false);
      }), (err => this.alertService.success("Mail Sending Failed !")));
    }
    
  }
  reset(){
    console.log("reset");
    document.getElementById("reset").click();
  }

  setReference(reference:string){
    this.reference=reference;
  }

  setType(type:string){
    this.type=type;
  }
}
