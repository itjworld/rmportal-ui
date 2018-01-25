import { Component } from '@angular/core';
import { FormsModule, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonService } from './../services/common.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent  {
  mail : FormGroup;
  constructor(private _commonService : CommonService,fb: FormBuilder, private alertService: AlertService) {
    this.mail = fb.group({
      'to': ['', Validators.required],
      'cc': '',
      'subject':['', Validators.required],
      'body': ['', [Validators.required]],
     })
   }

   submitForm(){
    this.alertService.clear();
    if (this.mail.dirty && this.mail.valid) {
      let mailInfo:any={to:this.mail.value.to , cc:this.mail.value.cc,subject:this.mail.value.subject,
      message:this.mail.value.body};
      this._commonService.sendMail(mailInfo).subscribe((info=>{
        console.info("send");
        this.alertService.success("Mail Sent Successfully");
      }), (err => this.alertService.success("Mail Sending Failed !")));
    }
  }
  reset(){
    console.log("reset");
    document.getElementById("reset").click();
  }
}
